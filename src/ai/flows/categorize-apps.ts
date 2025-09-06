'use server';

/**
 * @fileOverview AI-powered app categorization flow.
 *
 * This file defines a Genkit flow that uses AI to categorize apps based on their descriptions.
 * It exports:
 * - `categorizeApps`: The main function to categorize a list of apps.
 * - `CategorizeAppsInput`: The input type for the categorizeApps function.
 * - `CategorizeAppsOutput`: The output type for the categorizeApps function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AppSchema = z.object({
  name: z.string().describe('The name of the app.'),
  description: z.string().describe('A brief description of the app.'),
});

const CategorizeAppsInputSchema = z.array(AppSchema).describe('A list of apps to categorize.');
export type CategorizeAppsInput = z.infer<typeof CategorizeAppsInputSchema>;

const CategorizedAppSchema = AppSchema.extend({
  category: z.string().describe('The category of the app as determined by AI.'),
});

const CategorizeAppsOutputSchema = z.array(CategorizedAppSchema);
export type CategorizeAppsOutput = z.infer<typeof CategorizeAppsOutputSchema>;

export async function categorizeApps(input: CategorizeAppsInput): Promise<CategorizeAppsOutput> {
  return categorizeAppsFlow(input);
}

const appCategorizationPrompt = ai.definePrompt({
  name: 'appCategorizationPrompt',
  input: {schema: CategorizeAppsInputSchema},
  output: {schema: CategorizeAppsOutputSchema},
  prompt: `You are an expert app classifier. Given a list of apps with their descriptions, determine the most appropriate category for each app.

Valid categories are: Games, Social, Entertainment, Utilities, Productivity, Education, Finance, Health & Fitness, Shopping, Travel, Books, Business, Food & Drink, Lifestyle, Medical, Music & Audio, Navigation, News & Magazines, Photo & Video, Sports.

Output a JSON array where each object contains the app name, description, and the determined category.

Apps:
{{#each input}}
- Name: {{{this.name}}}
  Description: {{{this.description}}}
{{/each}}`,
});

const categorizeAppsFlow = ai.defineFlow(
  {
    name: 'categorizeAppsFlow',
    inputSchema: CategorizeAppsInputSchema,
    outputSchema: CategorizeAppsOutputSchema,
  },
  async input => {
    const {output} = await appCategorizationPrompt(input);
    return output!;
  }
);
