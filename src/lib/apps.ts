export type App = {
  id: number;
  name: string;
  img: string;
  author: string;
  description: string;
  url: string;
  slug: string;
};

const createSlug = (name: string) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const appData = [
  { name: "Altstore", img: "https://i.imgur.com/rq3p0eE.png", author: "AppsGU", description: "Sideload Any Apps To Your iPhone, iOS Device", url: "" },
  { name: "DreameShort Coins", img: "https://i.imgur.com/qKcgXd2.png", author: "Plugin Installer", description: "Unlimited Coins & Bonuses", url: "" },
  { name: "COD Mobile MOD Menu", img: "https://i.imgur.com/HJXUIFC.png", author: "MOD Installer", description: "Aimbot, SuperJump, Wallhack & MORE", url: "" },
  { name: "iRecovery", img: "https://i.imgur.com/MSsLgHs.png", author: "Plugin Installer", description: "Recover Permanently Deleted Photos & Videos", url: "" },
  { name: "eFootball 2024", img: "https://i.imgur.com/jnmtM3E.png", author: "MOD Installer", description: "Unlimited Money, GP VIP Features & Free Shopping", url: "" },
  { name: "FC Mobile 24/25", img: "https://i.imgur.com/FcTO2xT.png", author: "Plugin Installer", description: "Unlimited FC Points & Gems ~ iOS & Android", url: "" },
  { name: "Hamster Kombat++", img: "https://i.imgur.com/MVooQ0p.png", author: "Plugin Installer", description: "Unlimited Coins Plugin (WITHDRAW)", url: "" },
  { name: "Pocket FM VIP", img: "https://i.imgur.com/T5ffjfp.png", author: "Plugin Installer", description: "Get Unlimited Coins & VIP Membership", url: "" },
  { name: "Delta Emulator", img: "https://i.imgur.com/BroSCkJ.png", author: "Emulator Installer", description: "Supports NES, SNES, N64, and DS & More", url: "" },
  { name: "ReelShort Coins", img: "https://i.imgur.com/SsA5Iit.png", author: "MOD Installer", description: "Unlimited Free Coins", url: "" },
  { name: "DramaBox Coins", img: "https://i.imgur.com/xuRom2l.png", author: "Plugin Installer", description: "999999 DramaBox Coins Plugin iOS & Android", url: "" },
  { name: "Baseball 9", img: "https://i.imgur.com/0UuAVIe.png", author: "MOD Installer", description: "Unlimited Coins, Gems & Energy (iOS & Android)", url: "" },
  { name: "Roblox Mod", img: "https://i.imgur.com/ItBBn9z.png", author: "AppsGU", description: "Super Jump, God Mode, Fly and much more using this Roblox Mod Menu", url: "https://appsgu.com/apps/RobloxMod.mobileconfig" },
  { name: "Instagram++", img: "https://i.imgur.com/M5mKDJ8.png", author: "AppsGU", description: "View private Instagram accounts without following them, get unlimited followers, and much more", url: "https://appsgu.com/apps/Instagram++.mobileconfig" },
  { name: "Discord Nitro", img: "https://i.imgur.com/tvz8mmU.png", author: "AppsGU", description: "Get Free Discord Nitro", url: "https://appsgu.com/apps/DiscordNitro.mobileconfig" },
  { name: "Coin Master++", img: "https://i.imgur.com/URZtLI3.png", author: "AppsGU", description: "Get Free Spins and Coins in Coin Master", url: "https://appsgu.com/apps/CoinMaster++.mobileconfig" },
  { name: "Cash App++", img: "https://i.imgur.com/TvTJo5P.png", author: "AppsGU", description: "Get up to $1000 per day using the modded Cash App++ app.", url: "https://appsgu.com/apps/CashApp++.mobileconfig" },
  { name: "Carbridge", img: "https://i.imgur.com/T1K28ua.png", author: "AppsGU", description: "Watch YouTube, Netflix In Your Car", url: "https://appsgu.com/apps/Carbridge.mobileconfig" },
  { name: "Auto Clicker", img: "https://i.imgur.com/kzqYtze.png", author: "AppsGU", description: "Repeatedly clicks on any area/button for you", url: "https://appsgu.com/apps/AutoClicker.mobileconfig" },
  { name: "Monopoly Go++", img: "https://i.imgur.com/ahghT00.png", author: "Plugin Installer", description: "Unlimited Dice & Cash ~ Works on LIVE Servers", url: "https://appsgu.com/apps/MonopolyGo.mobileconfig" },
  { name: "HappyMod", img: "https://i.imgur.com/hqotR1k.png", author: "AppsGU", description: "Enables HappyMod on iOS App Store!", url: "https://appsgu.com/apps/HappyMod.mobileconfig" },
  { name: "Predictor Aviator", img: "https://i.imgur.com/4X35cFo.png", author: "MOD", description: "Full Download for Free on iOS & Android", url: "https://appsgu.com/apps/PredictorAviator.mobileconfig" },
  { name: "8 Ball Pool Aim Tool", img: "https://i.imgur.com/e7UBAZE.png", author: "MOD Installer", description: "Guideline tool and more!", url: "https://appsgu.com/apps/8BallPoolMod.mobileconfig" },
  { name: "Pokemon Go Spoofer", img: "https://i.imgur.com/2X6jMHU.png", author: "Plugin Installer", description: "Spoofer, Teleport, Auto-Walk, Joystick, Auto Catch and more!", url: "https://appsgu.com/apps/PokemonGo.mobileconfig" },
  { name: "Subway Surfers", img: "https://i.imgur.com/GvplWNR.png", author: "MOD", description: "Unlimited Everything!", url: "https://appsgu.com/apps/SubwaySurfers.mobileconfig" },
  { name: "Nulls Brawl", img: "https://i.imgur.com/Tlbk3pp.png", author: "MOD", description: "Null's Brawl Private Server for iOS & Android!", url: "https://appsgu.com/apps/NullsBrawl.mobileconfig" }
];

export const apps: App[] = appData.map((app, index) => ({
  ...app,
  id: index + 1,
  slug: createSlug(app.name),
}));
