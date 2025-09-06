
export type App = {
  id: number;
  name: string;
  img: string;
  author: string;
  description: string;
  url: string;
  slug: string;
  version: string;
  size: string;
  category: string;
  longDescription: string;
  faqs: { question: string; answer: string }[];
};

const appData = [
    { 
        slug: "altstore",
        img: "https://i.imgur.com/rq3p0eE.png", 
        author: "AppsGU", 
        name: "AltStore", 
        description: "Free iOS app installer – sideload any IPA to iPhone/iPad (no jailbreak)",
        version: "1.7.1",
        size: "25 MB",
        category: "Utilities",
        longDescription: `AltStore is the best free alternative app store for non-jailbroken iOS devices in 2025. This powerful iOS app installer allows you to sideload any .ipa file directly to your iPhone or iPad using just your Apple ID - no jailbreak required.

## Why Choose AltStore for iOS App Installation?

### Key Features:
- **No Jailbreak Required**: Install apps safely withoutcompromising iOS security
- **Apple ID Integration**: Uses your official Apple ID for legitimate app signing
- **Auto-Refresh Technology**: Apps refresh automatically to prevent expiration
- **Open Source**: Fully transparent, community-driven development
- **Wide Compatibility**: Works on iOS 12.2+ including latest iOS versions

### Supported App Types:
- Emulators (Delta, PPSSPP, RetroArch)
- Social media mods (Instagram++, Twitter++)  
- Gaming utilities and cheats
- Productivity apps not on App Store
- Beta versions of popular apps

### Installation Requirements:
- Mac or Windows computer with AltServer
- Lightning/USB-C cable for initial setup
- Apple ID (free account works)
- iOS device running iOS 12.2 or later`,
        faqs: [
            { question: "Is AltStore safe for iOS app installation?", answer: "Yes, AltStore is completely safe and widely trusted by millions of iOS users. It uses Apple's official app signing process with your Apple ID, maintaining full iOS security. Unlike jailbreaking, AltStore doesn't modify your device's system files." },
            { question: "Can I install AltStore without a computer?", answer: "Initially, you need a Mac or Windows computer with AltServer for the first-time setup. However, once installed, apps refresh automatically over WiFi. Some advanced users use cloud-based solutions, but a computer is recommended for the most reliable experience." },
            { question: "What apps can I install with AltStore?", answer: "AltStore supports any .ipa file including emulators (Delta, PPSSPP), social media mods (Instagram++), gaming utilities, and apps not available on the App Store. Popular choices include RetroArch, uYou+ (YouTube mod), and various productivity apps." },
            { question: "Does AltStore work on the latest iOS version?", answer: "Yes, AltStore is regularly updated to support the latest iOS versions. It currently works on iOS 12.2 through iOS 17+ and is continuously maintained by the developer community." }
        ],
        url: "https://www.appsg.site/app/altstore"
    },
    { 
        slug: "dreameshort-coins",
        img: "https://i.imgur.com/qKcgXd2.png", 
        author: "Plugin Installer", 
        name: "DreameShort Coins", 
        description: "Unlimited coins & daily bonuses – unlock VIP stories on iOS & Android",
        version: "2.1.0",
        size: "12 MB",
        category: "Entertainment",
        longDescription: `Boost your DreameShort experience with unlimited coins and daily bonuses. This DreameShort Coins plugin unlocks VIP content so you can binge premium short dramas without interruptions.

### What You Get
- Unlimited Coins for VIP stories and episodes
- Daily Bonuses to keep watching
- No jailbreak/root required – iOS & Android support

### Quick Install (3 Steps)
1. Tap Download and follow the on-screen guide
2. Open DreameShort and sign in
3. Coins and bonuses apply automatically

### Tips
- Use a stable network during first activation
- If content doesn’t unlock immediately, relaunch the app`,
        faqs: [
            { question: "Will this work on the latest version of DreameShort?", answer: "Yes. We update compatibility regularly and validate against the latest store build." },
            { question: "Is this a one-time unlock?", answer: "Activation grants ongoing coins/bonuses for your account. Re-run activation only after major app updates if needed." },
            { question: "Does it require jailbreak/root?", answer: "No. Standard iOS and Android devices are supported." }
        ],
        url: "https://www.appsg.site/app/dreameshort-coins"
    },
    { 
        slug: "cod-mobile-mod-menu",
        img: "https://i.imgur.com/HJXUIFC.png", 
        author: "MOD Installer", 
        name: "COD Mobile MOD Menu", 
        description: "Aimbot, Wallhack, No Recoil & SuperJump – iOS & Android",
        version: "3.5.2",
        size: "98 MB",
        category: "Games",
        longDescription: `Win more matches in Call of Duty: Mobile with a powerful MOD Menu built for iOS and Android.

### Key Features
- Aimbot for precise targeting
- Wallhack to see enemies through walls
- SuperJump to reach tactical positions
- No Recoil for perfect accuracy

### Quick Setup
1. Download and install the MOD Menu
2. Launch COD Mobile
3. Tap the floating icon to toggle features

Use responsibly, especially in ranked modes.`,
        faqs: [
             { question: "Can my account get banned for using this mod?", answer: "There is always a risk of being banned when using mods in online games. We include anti-ban features, but use it at your own discretion, especially in ranked matches." },
             { question: "How do I activate the features in-game?", answer: "The mod menu appears as a floating icon on your screen during gameplay. You can tap it to open the menu and toggle the features you want to use." }
        ],
        url: "https://www.appsg.site/app/cod-mobile-mod-menu"
    },
    { 
        slug: "irecovery",
        img: "https://i.imgur.com/MSsLgHs.png", 
        author: "Plugin Installer", 
        name: "iRecovery", 
        description: "Recover Permanently Deleted Photos & Videos",
        version: "4.0.1",
        size: "30 MB",
        category: "Utilities",
        longDescription: `Accidentally deleted important photos or videos? iRecovery helps you restore media you thought were gone.

### What iRecovery Recovers
- Photos: JPG, PNG
- Videos: MP4, MOV

### How It Works
1. Install and open iRecovery
2. Choose Quick or Deep Scan
3. Preview and restore selected files

Tips: Run the scan soon after deletion and avoid large new recordings to improve success rates.`,
        faqs: [
            { question: "Can iRecovery recover files after a factory reset?", answer: "No. Factory resets wipe data securely. iRecovery works best for recent, regular deletions." },
            { question: "Does it require my device to be jailbroken or rooted?", answer: "No. Standard iOS and Android devices are supported." },
            { question: "Which scan should I use?", answer: "Try Quick Scan first; if you don’t see files, run Deep Scan for a more thorough search." }
        ],
        url: "https://www.appsg.site/app/irecovery"
    },
    { 
        slug: "efootball-2024-mod",
        img: "https://i.imgur.com/jnmtM3E.png", 
        author: "MOD Installer", 
        name: "eFootball 2024", 
        description: "Unlimited Coins & GP, VIP features, free shopping – iOS & Android",
        version: "8.1.0",
        size: "150 MB",
        category: "Games",
        longDescription: `Build your dream team in eFootball 2024 with unlimited Coins & GP and VIP features.

### Key Features
- Unlimited Coins & GP
- VIP features enabled
- Free shopping in the in-game store
- Legendary players unlocked

### Quick Setup
1. Download and install eFootball 2024 Mod
2. Open the game; resources sync automatically
3. Build and manage your squad

Note: Use responsibly in online modes.`,
        faqs: [
            { question: "Will I be able to play online with this mod?", answer: "Yes, this mod is designed to work on the live servers, so you can play against other players online with your enhanced team." },
            { question: "Do the unlimited coins and GP sync with my account?", answer: "Yes, the resources are added directly to your account and will be available across any device you log into." }
        ],
        url: "https://www.appsg.site/app/efootball-2024-mod"
    },
    { 
        slug: "fc-mobile-24-25-mod",
        img: "https://i.imgur.com/FcTO2xT.png", 
        author: "Plugin Installer", 
        name: "FC Mobile 24/25", 
        description: "Unlimited FC Points & Gems – open packs faster (iOS & Android)",
        version: "1.2.5",
        size: "125 MB",
        category: "Games",
        longDescription: `Get ahead in FC Mobile 24/25 with unlimited FC Points & Gems to open packs and sign top players.

### Key Features
- 999,999 FC Points
- 999,999 Gems
- iOS & Android support

### Quick Setup
1. Download and install FC Mobile 24/25 plugin
2. Launch the game and sign in
3. Resources apply to your account

Use with care in competitive modes.`,
        faqs: [
            { question: "Is this safe for my FC Mobile account?", answer: "Yes, the plugin uses a safe injection method that is undetectable by the game servers, ensuring your account's safety." }
        ],
        url: "https://www.appsg.site/app/fc-mobile-24-25-mod"
    },
    { 
        slug: "roblox-mod",
        img: "https://i.imgur.com/ItBBn9z.png", 
        author: "AppsGU", 
        name: "Roblox Mod", 
        description: "Roblox Mod Menu – Fly, God Mode, Super Jump & Speed (iOS/Android)",
        version: "2.605.0",
        size: "105 MB",
        category: "Games",
        longDescription: `Enhance Roblox with a powerful MOD Menu on iOS and Android.

### Popular Features
- Fly to traverse worlds easily
- God Mode for invincibility
- Super Jump to leap over buildings
- Speed Hack to move faster

### Quick Setup
1. Install the Roblox Mod Menu
2. Launch Roblox; tap the floating icon
3. Toggle features you need`,
        faqs: [
            { question: "Does this mod menu work in all Roblox games?", answer: "The mod menu works in the vast majority of Roblox experiences. However, some games may have specific anti-cheat measures that could limit certain features." }
        ],
        url: "https://www.appsg.site/app/RobloxMod.mobileconfig"
    },
    { 
        slug: "instagram-plus-plus",
        img: "https://i.imgur.com/M5mKDJ8.png", 
        author: "AppsGU", 
        name: "Instagram++", 
        description: "Instagram++ – download media, view stories anonymously, extra tools (iOS/Android)",
        version: "20.1",
        size: "88 MB",
        category: "Social",
        longDescription: `Instagram++ is a tweaked Instagram client with extra features on iOS and Android.

### Key Features
- Download photos, videos, and stories
- Anonymous story viewing
- Extra tools for followers and profile management

### Quick Setup
1. Uninstall stock Instagram to avoid conflicts
2. Install Instagram++
3. Sign in and enable features in settings`,
        faqs: [
            { question: "Do I need to delete the original Instagram app?", answer: "Yes, it is recommended to uninstall the official Instagram app before installing Instagram++ to avoid conflicts." }
        ],
        url: "https://www.appsg.site/app/Instagram++.mobileconfig"
    },
    { 
        slug: "discord-nitro-free",
        img: "https://i.imgur.com/tvz8mmU.jpeg", 
        author: "AppsGU", 
        name: "Discord Nitro", 
        description: "Enable Discord Nitro perks for free – emojis, HD streaming, uploads",
        version: "N/A",
        size: "5 MB",
        category: "Social",
        longDescription: `Unlock Discord Nitro perks for free with this tool.

### Nitro Perks
- Custom emojis everywhere
- 1080p 60fps streaming
- Larger upload limits
- Animated avatars and profiles

### Quick Setup
1. Install the Discord Nitro tool
2. Open Discord and sign in
3. Enjoy Nitro perks while using the patched client`,
        faqs: [
            { question: "Is this a permanent Nitro subscription?", answer: "Perks are active while using the patched client. They do not convert to a paid subscription." }
        ],
        url: "https://www.appsg.site/app/DiscordNitro.mobileconfig"
    },
    { 
        slug: "pokemon-go-spoofer",
        img: "https://i.imgur.com/2X6jMHU.png", 
        author: "Plugin Installer", 
        name: "Pokemon Go Spoofer", 
        description: "Teleport, joystick, auto-walk, auto-catch & IV checker (iOS/Android)",
        version: "0.275.0",
        size: "115 MB",
        category: "Games",
        longDescription: `Explore Pokemon Go with advanced spoofing tools on iOS & Android.

### Key Features
- Teleport to any location
- Joystick for precise control
- Auto-walk for egg hatching
- Auto-catch nearby Pokémon
- IV checker before catching

### Cooldown Safety
Respect cooldowns after teleporting to avoid soft bans. Wait a realistic travel time before taking actions.`,
        faqs: [
            { question: "Is it safe to teleport long distances?", answer: "To avoid a soft ban, you must respect cooldown times. Do not teleport to a faraway location and immediately interact with the game. Wait for a reasonable amount of time, similar to actual travel time." }
        ],
        url: "https://www.appsg.site/app/PokemonGo.mobileconfig"
    },
     { 
        slug: "monopoly-go-plus-plus",
        img: "https://i.imgur.com/ahghT00.jpeg", 
        author: "Plugin Installer", 
        name: "Monopoly Go++", 
        description: "Unlimited dice & cash – build faster on live servers (iOS/Android)",
        version: "1.13.0",
        size: "75 MB",
        category: "Games",
        longDescription: `Keep rolling in Monopoly Go++ with unlimited dice and in-game cash.

### Key Features
- Unlimited Dice Rolls
- Unlimited In-Game Cash
- Works on live servers

### Quick Setup
1. Install Monopoly Go++
2. Open the game; resources sync to your account
3. Build and upgrade without waiting`,
        faqs: [
            { question: "How are the unlimited dice and cash applied?", answer: "After installing the mod, simply open the game. The resources will be automatically added to your account balance." }
        ],
        url: "https://www.appsg.site/app/MonopolyGo.mobileconfig"
    },
    { 
        slug: "board-kings-hack",
        img: "https://i.imgur.com/Oh29tXi.jpeg", 
        author: "BetterMods", 
        name: "Board Kings Hack", 
        description: "Unlimited Gems, Coins & Rolls!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Board Kings Hack – Build Boards with Unlimited Gems, Coins & Rolls\n\nWhat you get\n- Unlimited rolls to progress boards faster\n- Extra gems/coins for upgrades and events\n\nHow to install (iOS & Android)\n1) Tap Download and install Board Kings Hack\n2) Open the game and finish the intro\n3) Resources sync automatically – start rolling and upgrading\n\nPlay tips\n- Upgrade multipliers first to maximize rewards\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for online play?", answer: "Prefer casual; competitive use can increase detection risk." },
            { question: "Root/jailbreak required?", answer: "No, works on standard devices." }
        ],
        url: "https://www.appsg.site/app/board-kings-hack"
    },
    { 
        slug: "bingo-blitz-hack",
        img: "https://i.imgur.com/WrZJqtT.jpeg",  
        author: "BetterMods", 
        name: "Bingo Blitz Hack", 
        description: "Unlimited Coins & Credits!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Bingo Blitz Hack – Unlimited Coins & Credits for Faster Rooms\n\nWhat you get\n- Unlimited coins/credits to join rooms and power-ups\n\nHow to install\n1) Download and install Bingo Blitz Hack\n2) Launch the game and complete tutorial\n3) Resources sync automatically\n\nTips\n- Use power-ups strategically for blackout bingos\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Online safety?", answer: "Use casually; competitive boards raise risk." },
            { question: "Persistence?", answer: "Benefits apply while installed." }
        ],
        url: "https://www.appsg.site/app/bingo-blitz-hack"
    },
    { 
        slug: "subway-surfers-hack",
        img: "https://i.imgur.com/jEAi4PW.jpeg", 
        author: "BetterMods", 
        name: "Subway Surfers Hack", 
        description: "Unlimited Coins/Keys!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Subway Surfers Hack – Unlimited Coins & Keys for Skins and Boards\n\nWhat you get\n- Unlock characters, boards and upgrades instantly\n\nInstall\n1) Download and install Subway Surfers Hack\n2) Open game; finish intro run\n3) Coins/keys sync automatically\n\nTips\n- Use hoverboards to prevent crashes and extend runs\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Ban risk?", answer: "Use offline/casual to reduce risk." },
            { question: "Root/jailbreak?", answer: "Not required." }
        ],
        url: "https://www.appsg.site/app/subway-surfers-hack"
    },
    { 
        slug: "fc-mobile-hack",
        img: "https://i.imgur.com/bdvQ46z.jpeg", 
        author: "BetterMods", 
        name: "FC Mobile Hack", 
        description: "Unlimited FC Points & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `FC Mobile Hack – Unlimited Points & Coins for Squad Upgrades\n\nWhat you get\n- Unlock packs, players and passes quickly\n\nInstall\n1) Download and install FC Mobile Hack\n2) Launch, complete intro\n3) Resources sync automatically\n\nTips\n- Focus on chemistry and upgrade core positions first\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Ranked safety?", answer: "Prefer casual/offline modes to reduce risk." },
            { question: "Persistence?", answer: "Benefits apply while installed." }
        ],
        url: "https://www.appsg.site/app/fc-mobile-hack"
    },
    { 
        slug: "idle-heroes-hack",
        img: "https://i.imgur.com/t6uwXQY.jpeg", 
        author: "BetterMods", 
        name: "Idle Heroes Hack", 
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Idle Heroes Hack – Progress Faster with Unlimited Gems & Coins\n\nWhat you get\n- Summon, upgrade and advance heroes instantly\n\nInstall\n1) Download and install Idle Heroes Hack\n2) Open and complete tutorial\n3) Resources sync automatically\n\nTips\n- Prioritize core factions and key artifacts\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Online events?", answer: "Prefer PvE; PvP may increase risk." },
            { question: "Root/jailbreak?", answer: "Not required." }
        ],
        url: "https://www.appsg.site/app/idle-heroes-hack"
    },
    { 
        slug: "sims-freeplay-hack",
        img: "https://i.imgur.com/RuyIM2l.jpeg", 
        author: "BetterMods", 
        name: "Sims FreePlay Hack", 
        description: "Unlimited Simoleons/Points and MAX VIP!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Sims FreePlay Hack – Unlimited Simoleons/Points & VIP\n\nWhat you get\n- Build, decorate and advance instantly with max currency\n\nInstall\n1) Download and install Sims FreePlay Hack\n2) Launch and finish tutorial\n3) Resources sync automatically\n\nTips\n- Expand lots and essential rooms first\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Online safety?", answer: "Best in casual; ranked/leaderboards not recommended." },
            { question: "Persistence?", answer: "Benefits apply while installed." }
        ],
        url: "https://www.appsg.site/app/sims-freeplay-hack"
    },
    { 
        slug: "car-simulator-2-hack",
        img: "https://i.imgur.com/qOgKqhE.jpeg", 
        author: "BetterMods", 
        name: "Car Simulator 2 Hack", 
        description: "Unlimited Coins, Blueprints & Crypto!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Car Simulator 2 Hack – Unlimited Coins, Blueprints & Crypto\n\nWhat you get\n- Buy cars, upgrades and customizations instantly\n\nInstall\n1) Download and install Car Simulator 2 Hack\n2) Open and complete tutorial drive\n3) Resources sync automatically\n\nTips\n- Upgrade engine/handling before cosmetics\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Online?", answer: "Prefer casual/free roam to reduce detection risk." },
            { question: "Root/jailbreak?", answer: "Not required." }
        ],
        url: "https://www.appsg.site/app/car-simulator-2-hack"
    },
    { 
        slug: "capcut-pro",
        img: "https://i.imgur.com/S2GDQsf.jpeg", 
        author: "BetterMods", 
        name: "CapCut Pro", 
        description: "Compatible with Android & iOS devices!",
        version: "1.0.0",
        size: "Varies",
        category: "Utilities",
        longDescription: `CapCut Pro – Pro Video Editing on iOS & Android\n\nWhat you get\n- Pro tools, effects and exports without subscriptions\n\nInstall\n1) Download and install CapCut Pro\n2) Open and grant media permissions\n3) Start editing – 1080p/4K export enabled\n\nTips\n- Use keyframes and curves for smooth motion\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Watermark removed?", answer: "Exports without watermark enabled." },
            { question: "Root/jailbreak?", answer: "Not required." }
        ],
        url: "https://www.appsg.site/app/capcut-pro"
    },
    { 
        slug: "dice-dreams-hack",
        img: "https://i.imgur.com/uNxEvkd.jpeg", 
        author: "BetterMods", 
        name: "Dice Dreams Hack", 
        description: "Unlimited Rolls & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Dice Dreams Hack – Unlimited Rolls & Coins\n\nWhat you get\n- Roll more, raid more and build faster\n\nInstall\n1) Download and install Dice Dreams Hack\n2) Launch and complete intro\n3) Resources sync automatically\n\nTips\n- Time rolls for jackpot events\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Online safety?", answer: "Use casually to minimize risk." },
            { question: "Persistence?", answer: "Applies while installed." }
        ],
        url: "https://www.appsg.site/app/dice-dreams-hack"
    },
    { 
        slug: "modern-strike-hack",
        img: "https://i.imgur.com/9R6aWoD.jpeg", 
        author: "BetterMods", 
        name: "Modern Strike Hack", 
        description: "Unlimited Gold & Credits!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Modern Strike Hack – Unlimited Gold & Credits\n\nWhat you get\n- Unlock weapons, armor and skins instantly\n\nInstall\n1) Download and install Modern Strike Hack\n2) Open and finish tutorial\n3) Resources sync automatically\n\nTips\n- Adjust sensitivity and aim assist settings for control\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Ranked?", answer: "Prefer casual; ranked increases risk." },
            { question: "Root/jailbreak?", answer: "Not required." }
        ],
        url: "https://www.appsg.site/app/modern-strike-hack"
    },
    { 
        slug: "hogwarts-mystery-hack",
        img: "https://i.imgur.com/ImQoAC8.jpeg", 
        author: "BetterMods", 
        name: "Hogwarts Mystery Hack", 
        description: "Unlimited Energy, Gems & Gold!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Hogwarts Mystery Hack – Unlimited Energy, Gems & Gold\n\nWhat you get\n- Progress story and classes faster\n\nInstall\n1) Download and install Hogwarts Mystery Hack\n2) Launch and finish intro chapters\n3) Resources sync automatically\n\nTips\n- Spend energy on classes with best rewards\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Ban risk?", answer: "Use casually to reduce risk." },
            { question: "Persistence?", answer: "Benefits apply while installed." }
        ],
        url: "https://www.appsg.site/app/hogwarts-mystery-hack"
    },
    { 
        slug: "ppsspp",
        img: "https://i.imgur.com/g1rtn5L.jpeg", 
        author: "BetterMods", 
        name: "PPSSPP", 
        description: "PPSSPP on iOS/Android without Jailbreak!",
        version: "1.0.0",
        size: "Varies",
        category: "Utilities",
        longDescription: `PPSSPP – PSP Emulator for iOS & Android\n\nWhat you get\n- High performance PSP emulation and save states\n\nInstall\n1) Download and install PPSSPP\n2) Grant storage permissions\n3) Load PSP ISOs and play\n\nTips\n- Enable frameskip on low-end devices\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Controller support?", answer: "Works with most Bluetooth controllers." },
            { question: "Jailbreak/root?", answer: "Not required." }
        ],
        url: "https://www.appsg.site/app/ppsspp"
    },
    { 
        slug: "apex-legends-hack",
        img: "https://i.imgur.com/sgl0k68.jpeg", 
        author: "BetterMods", 
        name: "Apex Legends Hack", 
        description: "Unlimited Coins & Battle Pass!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Apex Legends Hack – Coins & Pass Unlocks\n\nWhat you get\n- Unlock skins, legends and passes quickly\n\nInstall\n1) Download and install Apex Legends Hack\n2) Open and complete tutorial\n3) Resources sync automatically\n\nTips\n- Optimize sensitivity and FOV for better aim\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Ranked safety?", answer: "Use casual modes; ranked raises risk." },
            { question: "Root/jailbreak?", answer: "Not required." }
        ],
        url: "https://www.appsg.site/app/apex-legends-hack"
    },
    { 
        slug: "car-parking-multiplayer-2-hack",
        img: "https://i.imgur.com/ugYpecY.jpeg", 
        author: "BetterMods", 
        name: "Car Parking Multiplayer 2 Hack", 
        description: "Unlimited Money & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Car Parking Multiplayer 2 Hack – Unlimited Money & Coins\n\nWhat you get\n- Buy cars, parts and cosmetics instantly\n\nInstall\n1) Download and install CPM 2 Hack\n2) Open and finish tutorial\n3) Resources sync automatically\n\nTips\n- Tune handling before visuals\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Online?", answer: "Prefer casual rooms to reduce risk." },
            { question: "Persistence?", answer: "Benefits apply while installed." }
        ],
        url: "https://www.appsg.site/app/car-parking-multiplayer-2-hack"
    },
    { 
        slug: "blood-strike-mod",
        img: "https://i.imgur.com/jp8Z9r5.jpeg", 
        author: "BetterMods", 
        name: "Blood Strike Mod", 
        description: "Unlimited 9999999 Gold!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Blood Strike Mod – Unlimited Gold for Gear & Skins\n\nInstall\n1) Download and install Blood Strike Mod\n2) Launch and complete tutorial\n3) Gold syncs automatically\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Ranked?", answer: "Use casual to minimize risk." },
            { question: "Root/jailbreak?", answer: "Not required." }
        ],
        url: "https://www.appsg.site/app/blood-strike-mod"
    },
    { 
        slug: "osm-22-23-hack",
        img: "https://i.imgur.com/l5nQWph.jpeg", 
        author: "BetterMods", 
        name: "OSM 22/23 Hack", 
        description: "Unlimited Boss Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `OSM 22/23 Hack – Unlimited Boss Coins for Faster Club Growth\n\nInstall\n1) Download and install OSM 22/23 Hack\n2) Open and complete intro\n3) Coins sync automatically\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "League safety?", answer: "Prefer private/casual leagues." },
            { question: "Persistence?", answer: "Benefits apply while installed." }
        ],
        url: "https://www.appsg.site/app/osm-22-23-hack"
    },
    { 
        slug: "efootball-2024-hack",
        img: "https://i.imgur.com/bHoTstK.jpeg", 
        author: "BetterMods", 
        name: "eFootball 2024 Hack", 
        description: "Unlimited Coins & GP!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `eFootball 2024 Hack – Coins & GP for Team Upgrades\n\nInstall\n1) Download and install eFootball 2024 Hack\n2) Launch and finish tutorial\n3) Resources sync automatically\n\nTips\n- Build a balanced squad; upgrade key positions first\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Online ranked?", answer: "Stick to casual/offline for safety." },
            { question: "Root/jailbreak?", answer: "Not required." }
        ],
        url: "https://www.appsg.site/app/efootball-2024-hack"
    },
    { 
        slug: "ludo-king-hack",
        img: "https://i.imgur.com/2NNYwpz.jpeg", 
        author: "BetterMods", 
        name: "Ludo King Hack", 
        description: "Unlimited Coins & Diamonds!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Ludo King Hack – Unlimited Coins & Diamonds\n\nInstall\n1) Download and install Ludo King Hack\n2) Open and complete intro\n3) Resources sync automatically\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Online safety?", answer: "Use casually to minimize risk." },
            { question: "Persistence?", answer: "Applies while installed." }
        ],
        url: "https://www.appsg.site/app/ludo-king-hack"
    },
    { 
        slug: "island-war-hack",
        img: "https://i.imgur.com/5yQ3GHO.jpeg", 
        author: "BetterMods", 
        name: "Island War Hack", 
        description: "Unlimited Money & Gems!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Island War Hack – Unlimited Money & Gems for Faster Raids\n\nInstall\n1) Download and install Island War Hack\n2) Open and finish tutorial\n3) Resources sync automatically\n\nTips\n- Upgrade troops and boats before decorations\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "PvP?", answer: "Prefer casual to reduce risk." },
            { question: "Root/jailbreak?", answer: "Not required." }
        ],
        url: "https://www.appsg.site/app/island-war-hack"
    },
    { 
        slug: "valor-legends-hack",
        img: "https://i.imgur.com/cm3ufj9.jpeg", 
        author: "BetterMods", 
        name: "Valor Legends Hack", 
        description: "Unlimited Gems!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Valor Legends Hack – Unlimited Gems for Hero Upgrades\n\nInstall\n1) Download and install Valor Legends Hack\n2) Launch and complete intro\n3) Resources sync automatically\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Online safety?", answer: "Stick to casual modes." },
            { question: "Persistence?", answer: "Benefits apply while installed." }
        ],
        url: "https://www.appsg.site/app/valor-legends-hack"
    },
    { 
        slug: "star-wars-galaxy-of-heroes-hack",
        img: "https://i.imgur.com/qFY4m4t.jpeg", 
        author: "BetterMods", 
        name: "Star Wars: Galaxy of Heroes Hack", 
        description: "Unlimited Crystals!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `SWGOH Hack – Unlimited Crystals for Faster Progression\n\nInstall\n1) Download and install SWGOH Hack\n2) Open and complete intro\n3) Crystals sync automatically\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Arena/GAC?", answer: "Use casually; competitive may increase risk." },
            { question: "Root/jailbreak?", answer: "Not required." }
        ],
        url: "https://www.appsg.site/app/star-wars-galaxy-of-heroes-hack"
    },
    { 
        slug: "best-friends-hack",
        img: "https://i.imgur.com/NYCmoVJ.jpeg", 
        author: "BetterMods", 
        name: "Best Friends Hack", 
        description: "Unlimited Gold & Keys!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Best Friends Hack – Unlimited Gold & Keys\n\nInstall\n1) Download and install Best Friends Hack\n2) Open and finish tutorial\n3) Resources sync automatically\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Online events?", answer: "Prefer casual play modes." },
            { question: "Persistence?", answer: "Benefits apply while installed." }
        ],
        url: "https://www.appsg.site/app/best-friends-hack"
    },
    { 
        slug: "beatstar-hack",
        img: "https://i.imgur.com/KYT7Xrn.jpeg", 
        author: "BetterMods", 
        name: "Beatstar Hack", 
        description: "Unlimited Gems!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Beatstar Hack – Unlimited Gems for Tracks and Upgrades\n\nInstall\n1) Download and install Beatstar Hack\n2) Launch and complete intro\n3) Gems sync automatically\n\nTips\n- Lower latency setting for tighter timing\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Online?", answer: "Use casually to reduce risk." },
            { question: "Root/jailbreak?", answer: "Not required." }
        ],
        url: "https://www.appsg.site/app/beatstar-hack"
    },
    { 
        slug: "hungry-shark-world-hack",
        img: "https://i.imgur.com/OkWbNly.jpeg", 
        author: "BetterMods", 
        name: "Hungry Shark World Hack", 
        description: "Unlimited Coins & Gems!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Hungry Shark World Hack – Unlimited Coins & Gems\n\nInstall\n1) Download and install HSW Hack\n2) Open and complete tutorial swim\n3) Resources sync automatically\n\nTips\n- Upgrade bite/speed/boost first\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Online safety?", answer: "Stick to casual to reduce risk." },
            { question: "Persistence?", answer: "Benefits apply while installed." }
        ],
        url: "https://www.appsg.site/app/hungry-shark-world-hack"
    },
    { 
        slug: "golf-battle-hack",
        img: "https://i.imgur.com/kQNvtV3.jpeg", 
        author: "BetterMods", 
        name: "Golf Battle Hack", 
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Golf Battle Hack – Unlimited Gems & Coins\n\nInstall\n1) Download and install Golf Battle Hack\n2) Launch and finish tutorial putts\n3) Resources sync automatically\n\nTips\n- Optimize club and ball selection for map type\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Ranked?", answer: "Prefer casual to reduce risk." },
            { question: "Root/jailbreak?", answer: "Not required." }
        ],
        url: "https://www.appsg.site/app/golf-battle-hack"
    },
    { 
        slug: "fc-mobile",
        img: "https://i.imgur.com/nATWBTW.jpeg", 
        author: "BetterMods", 
        name: "FC Mobile", 
        description: "Install FC Mobile on iOS/Android!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `FC Mobile – Install on iOS & Android (Guide)\n\nWhat you get\n- Easy install and setup with optimized steps\n\nInstall\n1) Download and install FC Mobile\n2) Open and sign in\n3) Start building your squad\n\nTips\n- Enable 60fps for smoother play on capable devices\n\nCompatibility\n- iOS 12+ / Android 7+`,
        faqs: [
            { question: "Cross-save?", answer: "Progress syncs with your linked account." },
            { question: "Root/jailbreak?", answer: "Not required." }
        ],
        url: "https://www.appsg.site/app/fc-mobile"
    },
    { 
        slug: "match-masters-mod",
        img: "https://i.imgur.com/UzciDnD.jpeg", 
        author: "TapTweak", 
        name: "Match Masters Mod", 
        description: "Unlimited Coins, Boosters & Free Shopping for iOS & Android",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Download Match Masters Mod for iOS and Android and unlock premium features instantly.

### Key Mod Features
- Unlimited Coins for upgrades and skins
- Unlimited Boosters and free spins
- Free Shopping enabled (no real money)
- Works on both iPhone/iPad and Android

### Why Use This Mod?
This 2025-ready Match Masters mod helps you progress faster without grinding. Safely enhance your gameplay with resources to focus on strategy and PvP matches.

### Installation Notes
- No jailbreak or root required
- Compatible with latest Match Masters version
- Use secondary accounts for competitive play
`,
        faqs: [
            { question: "Is this safe to use?", answer: "The mod includes anti-detection measures, but online games may enforce anti-cheat. Use responsibly, especially in ranked PvP." },
            { question: "Does it work on iOS and Android?", answer: "Yes. It supports iOS 12+ and modern Android devices without jailbreak or root." },
            { question: "Do I need to uninstall the original app?", answer: "On some devices, uninstalling the stock app avoids signature conflicts. If you encounter installation errors, remove the original app first." }
        ],
        url: "https://www.appsg.site/app/match-masters-mod"
    },
    { 
        slug: "nova-legacy-mod",
        img: "https://i.imgur.com/FN5zMDe.png", 
        author: "TapTweak", 
        name: "N.O.V.A. Legacy Mod", 
        description: "Unlimited Money, Trilithium, VIP Unlocks for iOS & Android",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Download N.O.V.A. Legacy Mod for iOS and Android and unlock premium resources instantly.

### Key Mod Features
- Unlimited Money and Trilithium for upgrades
- VIP features unlocked (weapons, armor, skins)
- Works on iPhone/iPad and Android devices
- Free shopping enabled (no real money)

### Gameplay Benefits
Level up faster, craft advanced gear, and enjoy the full sci‑fi campaign without grind. Optimized for 2025 builds with stability and performance tweaks.

### Installation Notes
- No jailbreak or root required
- Compatible with the latest N.O.V.A. Legacy version
- For PvP, prefer a secondary account to reduce risk
`,
        faqs: [
            { question: "Will my account be safe?", answer: "Anti-cheat exists in online modes. Use responsibly and avoid ranked PvP on your main account." },
            { question: "Is there iOS & Android support?", answer: "Yes. Supports iOS 12+ and most modern Android devices, without jailbreak or root." },
            { question: "Do I need to uninstall the stock app?", answer: "If you get install/signature errors, uninstall the original app first to avoid conflicts." }
        ],
        url: "https://www.appsg.site/app/nova-legacy-mod"
    },
    { 
        slug: "forge-of-empires-mod",
        img: "https://i.imgur.com/I1yUA4w.png", 
        author: "TapTweak", 
        name: "Forge of Empires Mod", 
        description: "Unlimited Diamonds, Supplies & Free Shopping on iOS & Android",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Download Forge of Empires Mod for iOS and Android and supercharge your city building.

### Key Mod Features
- Unlimited Diamonds for premium buildings and expansions
- Unlimited Supplies and resources
- Free Shopping enabled (no real-money purchases)
- Works on iPhone/iPad and Android

### Gameplay Benefits
Accelerate research, expand your city, and dominate events without waiting. This 2025-optimized build focuses on stability and smooth gameplay.

### Installation Notes
- No jailbreak or root required
- Compatible with the latest FoE version
- For competitive guild play, consider a secondary account
`,
        faqs: [
            { question: "Can this cause a ban?", answer: "Anti-cheat may detect irregularities in competitive modes. Use responsibly and avoid ranked events on main accounts." },
            { question: "Does it support both platforms?", answer: "Yes. Supports iOS 12+ and modern Android devices without jailbreak or root." },
            { question: "Do I need to uninstall the original?", answer: "If you see install/signature conflicts, uninstall the stock app first and try again." }
        ],
        url: "https://www.appsg.site/app/forge-of-empires-mod"
    },
    { 
        slug: "carx-street-mod",
        img: "https://i.imgur.com/ww6283n.jpeg", 
        author: "TapTweak", 
        name: "CarX Street Mod", 
        description: "Unlimited money – upgrade cars & builds (iOS/Android)",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Enjoy unlimited money in CarX Street to upgrade cars and customize builds on iOS & Android.

### Quick Setup
1. Install CarX Street Mod
2. Launch the game
3. Upgrade and tune without limits`,
        faqs: [
            { question: "Is this detectable?", answer: "We minimize detection risk, but nothing is 100% undetectable in online games." },
            { question: "Works on iOS and Android?", answer: "Yes, both are supported." }
        ],
        url: "https://www.appsg.site/app/carx-street-mod"
    },
    { 
        slug: "nulls-brawl",
        img: "https://i.imgur.com/qvEKuwI.jpeg", 
        author: "TapTweak", 
        name: "Null's Brawl", 
        description: "Private Brawl Stars server – easy install for iOS & Android",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Enjoy a custom Brawl Stars experience on a private server, with streamlined install and enhanced features on iOS & Android.

### Quick Setup
1. Install Null's Brawl
2. Open and create your profile
3. Play on private servers with boosted progression`,
        faqs: [
            { question: "Is this an official server?", answer: "No, it's a modified experience; do not use your main account." },
            { question: "Platforms supported?", answer: "iOS and Android are supported." }
        ],
        url: "https://www.appsg.site/app/nulls-brawl"
    },
    { 
        slug: "mortal-kombat-mod",
        img: "https://i.imgur.com/GPmMlCV.jpeg", 
        author: "TapTweak", 
        name: "Mortal Kombat Mod", 
        description: "Unlimited Souls & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Maximize your roster with unlimited souls and coins in Mortal Kombat Mobile. iOS & Android support included.`,
        faqs: [
            { question: "Can I play online?", answer: "Online play may carry ban risk. Use at your own risk." },
            { question: "Is it cross-platform?", answer: "Yes, iOS and Android are supported." }
        ],
        url: "https://www.appsg.site/app/mortal-kombat-mod"
    },
    { 
        slug: "loot-boy-mod",
        img: "https://i.imgur.com/9UeNwnL.jpeg", 
        author: "TapTweak", 
        name: "Loot Boy Mod", 
        description: "Unlimited Diamonds, Tickets & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Get unlimited diamonds, tickets, and coins in Loot Boy to unlock premium packs seamlessly. Works on iOS & Android.`,
        faqs: [
            { question: "Are purchases free?", answer: "This enables resources; do not attempt real-money transactions." },
            { question: "Supported devices?", answer: "iOS and Android." }
        ],
        url: "https://www.appsg.site/app/loot-boy-mod"
    },
    { 
        slug: "bus-simulator-ultimate-mod",
        img: "https://i.imgur.com/z5SVQvN.jpeg", 
        author: "TapTweak", 
        name: "Bus Simulator: Ultimate Mod", 
        description: "Unlimited Money & Gold!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Drive freely with unlimited money and gold in Bus Simulator: Ultimate. Supports iOS & Android.`,
        faqs: [
            { question: "Is this multiplayer-safe?", answer: "We cannot guarantee safety in multiplayer; use responsibly." },
            { question: "Platform support?", answer: "iOS and Android." }
        ],
        url: "https://www.appsg.site/app/bus-simulator-ultimate-mod"
    },
    { 
        slug: "race-master-3d-mod",
        img: "https://i.imgur.com/f2b9l1a.jpeg", 
        author: "TapTweak", 
        name: "Race Master 3D Mod", 
        description: "Unlimited Money, Nitro & Shields!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Boost through levels with unlimited money, nitro, and shields in Race Master 3D. iOS & Android supported.`,
        faqs: [
            { question: "Any risk of ban?", answer: "All mods carry some risk in online modes." },
            { question: "Does it work on both OS?", answer: "Yes, iOS and Android." }
        ],
        url: "https://www.appsg.site/app/race-master-3d-mod"
    },
    { 
        slug: "ninja-turtles-legends-mod",
        img: "https://i.imgur.com/5enzvGz.jpeg", 
        author: "TapTweak", 
        name: "Ninja Turtles: Legends Mod", 
        description: "Unlimited Greenbacks & Everything!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Gain unlimited greenbacks and resources in Ninja Turtles: Legends for effortless progression. iOS & Android supported.`,
        faqs: [
            { question: "Do I need root/jailbreak?", answer: "No, it works without root or jailbreak." },
            { question: "Platforms?", answer: "iOS & Android." }
        ],
        url: "https://www.appsg.site/app/ninja-turtles-legends-mod"
    },
    { 
        slug: "guns-of-boom-mod",
        img: "https://i.imgur.com/iv7W48d.jpeg", 
        author: "TapTweak", 
        name: "Guns of Boom Mod", 
        description: "Unlimited Money & Gold!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Unlock unlimited money and gold in Guns of Boom to access gear instantly. Works on iOS & Android.`,
        faqs: [
            { question: "Will this affect matchmaking?", answer: "Resource changes may influence gameplay; use fairly." },
            { question: "Supported devices?", answer: "iOS and Android." }
        ],
        url: "https://www.appsg.site/app/guns-of-boom-mod"
    },
    { 
        slug: "mini-world-mod",
        img: "https://i.imgur.com/t90YbJ7.jpeg", 
        author: "TapTweak", 
        name: "Mini World Mod", 
        description: "Unlimited Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Explore Mini World with unlimited coins to unlock skins and items. iOS & Android supported.`,
        faqs: [
            { question: "Is this offline only?", answer: "It works offline; online play may carry risks." },
            { question: "Cross-platform?", answer: "Supports iOS & Android." }
        ],
        url: "https://www.appsg.site/app/mini-world-mod"
    },
    { 
        slug: "blockman-go-mod",
        img: "https://i.imgur.com/GM40RZm.jpeg", 
        author: "TapTweak", 
        name: "Blockman GO Mod", 
        description: "Unlimited GCubes & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Get unlimited GCubes and coins in Blockman GO to enjoy premium features. iOS & Android supported.`,
        faqs: [
            { question: "Can I use my main account?", answer: "We recommend using a secondary account for safety." },
            { question: "Platform support?", answer: "iOS and Android." }
        ],
        url: "https://www.appsg.site/app/blockman-go-mod"
    },
    { 
        slug: "dead-by-daylight-mod",
        img: "https://i.imgur.com/ci82VQ5.jpeg", 
        author: "TapTweak", 
        name: "Dead by Daylight Mod", 
        description: "Unlimited Auric Cells & More!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Access premium resources like auric cells in Dead by Daylight Mobile. iOS & Android supported.`,
        faqs: [
            { question: "Is anti-cheat a concern?", answer: "Yes, always use mods responsibly to minimize risks." },
            { question: "Supported OS?", answer: "iOS & Android." }
        ],
        url: "https://www.appsg.site/app/dead-by-daylight-mod"
    },
    { 
        slug: "the-sims-mod",
        img: "https://i.imgur.com/RoGapCb.jpeg", 
        author: "TapTweak", 
        name: "The Sims™ Mod", 
        description: "Unlimited Money & Simcash!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Enjoy unlimited money and SimCash in The Sims Mobile for boundless creativity. iOS & Android supported.`,
        faqs: [
            { question: "Do I need special setup?", answer: "No special setup required beyond standard installation." },
            { question: "Platform availability?", answer: "iOS and Android are supported." }
        ],
        url: "https://www.appsg.site/app/the-sims-mod"
    },
    { 
        slug: "lol-wild-rift-mod",
        img: "https://i.imgur.com/HA9DzHn.jpeg", 
        author: "TapTweak", 
        name: "LOL: Wild Rift Mod", 
        description: "Unlimited Wild Cores!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Obtain unlimited Wild Cores in Wild Rift to unlock skins and passes. iOS & Android supported.`,
        faqs: [
            { question: "Is this rank-safe?", answer: "Using mods in ranked can be risky; avoid on main accounts." },
            { question: "OS support?", answer: "iOS & Android." }
        ],
        url: "https://www.appsg.site/app/lol-wild-rift-mod"
    },
    { 
        slug: "pubg-mobile-mod",
        img: "https://i.imgur.com/cThCbh8.jpeg", 
        author: "TapTweak", 
        name: "PUBG Mobile Mod", 
        description: "Unlimited UC, Money!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Unlock UC and resources in PUBG Mobile. Optimize gameplay with premium content. iOS & Android supported.`,
        faqs: [
            { question: "Ban risk?", answer: "High-profile titles employ strict anti-cheat; use with caution." },
            { question: "Platforms?", answer: "iOS and Android." }
        ],
        url: "https://www.appsg.site/app/pubg-mobile-mod"
    },
    { 
        slug: "last-day-on-earth-survival-mod",
        img: "https://i.imgur.com/zGEfhmo.jpeg", 
        author: "TapTweak", 
        name: "Last Day on Earth: Survival Mod", 
        description: "Unlimited Coins & Gold!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Survive with unlimited coins and gold in LDoE. Craft and build freely. iOS & Android supported.`,
        faqs: [
            { question: "Offline support?", answer: "Yes, it works offline; online sync may vary." },
            { question: "OS support?", answer: "iOS & Android." }
        ],
        url: "https://www.appsg.site/app/last-day-on-earth-survival-mod"
    },
    { 
        slug: "teamfight-tactics-mod",
        img: "https://i.imgur.com/9ZCZck1.jpeg", 
        author: "TapTweak", 
        name: "TeamFight Tactics Mod", 
        description: "Unlimited Coins & Star Fragments!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Get unlimited coins and star fragments in TFT. Enhance cosmetics quickly on iOS & Android.`,
        faqs: [
            { question: "Ranked implications?", answer: "Using mods in ranked modes can be risky; proceed with caution." },
            { question: "Supported OS?", answer: "iOS and Android." }
        ],
        url: "https://www.appsg.site/app/teamfight-tactics-mod"
    },
    { 
        slug: "jetpack-joyride-mod",
        img: "https://i.imgur.com/SHsNAMD.jpeg", 
        author: "TapTweak", 
        name: "Jetpack Joyride Mod", 
        description: "Unlimited Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Collect coins without limits in Jetpack Joyride for endless fun. iOS & Android support.`,
        faqs: [
            { question: "Needs jailbreak/root?", answer: "No, not required." },
            { question: "Device support?", answer: "iOS & Android." }
        ],
        url: "https://www.appsg.site/app/jetpack-joyride-mod"
    },
    { 
        slug: "baseball-9-mod",
        img: "https://i.imgur.com/PevNHtH.jpeg", 
        author: "TapTweak", 
        name: "Baseball 9 Mod", 
        description: "Unlimited Money & Gems!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Upgrade your team with unlimited money and gems in Baseball 9. Works on iOS & Android.`,
        faqs: [
            { question: "Is progress permanent?", answer: "Yes, progress persists locally; online sync may vary." },
            { question: "OS compatibility?", answer: "iOS and Android." }
        ],
        url: "https://www.appsg.site/app/baseball-9-mod"
    },
    { 
        slug: "photos-plus",
        img: "https://i.imgur.com/X78CBbO.png", 
        author: "TapTweak", 
        name: "Photos+", 
        description: "Recover deleted Photos/Videos on iOS & Android!",
        version: "1.0.0",
        size: "12 MB",
        category: "Utilities",
        longDescription: `Recover deleted photos and videos on iOS & Android with advanced scanning and restore tools.`,
        faqs: [
            { question: "Does it require root or jailbreak?", answer: "No, it works on standard devices." },
            { question: "Can it recover after factory reset?", answer: "No. Factory resets wipe data beyond recovery." }
        ],
        url: "https://www.appsg.site/app/photos-plus"
    },
    { 
        slug: "harry-potter-puzzles-and-spells-mod",
        img: "https://i.imgur.com/1Ae1HUj.jpeg", 
        author: "TapTweak", 
        name: "Harry Potter: Puzzles & Spells Mod", 
        description: "Unlimited Gold!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Enjoy unlimited gold to unlock boosts in Harry Potter: Puzzles & Spells. iOS & Android supported.`,
        faqs: [
            { question: "Ban risk?", answer: "Use responsibly; online modes may detect anomalies." },
            { question: "Platforms supported?", answer: "iOS and Android." }
        ],
        url: "https://www.appsg.site/app/harry-potter-puzzles-and-spells-mod"
    },
    { 
        slug: "injustice-2-mod",
        img: "https://i.imgur.com/ecCKqAb.jpeg", 
        author: "TapTweak", 
        name: "Injustice 2 Mod", 
        description: "Unlimited Gems & Credits!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Unlock gems and credits in Injustice 2 to upgrade heroes. iOS & Android support.`,
        faqs: [
            { question: "Does this work online?", answer: "Online use may carry risks; use at your discretion." },
            { question: "Supported OS?", answer: "iOS & Android." }
        ],
        url: "https://www.appsg.site/app/injustice-2-mod"
    },
    { 
        slug: "king-of-thieves-mod",
        img: "https://i.imgur.com/vCWr1Yd.jpeg", 
        author: "TapTweak", 
        name: "King of Thieves Mod", 
        description: "Unlimited Orbs & Gold!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Get unlimited orbs and gold in King of Thieves to upgrade dungeons and gear. iOS & Android supported.`,
        faqs: [
            { question: "Can my account get banned?", answer: "There is always risk in online games; use carefully." },
            { question: "OS support?", answer: "iOS and Android." }
        ],
        url: "https://www.appsg.site/app/king-of-thieves-mod"
    },
    { 
        slug: "monster-legends-mod",
        img: "https://i.imgur.com/YoiDkaH.jpeg", 
        author: "TapTweak", 
        name: "Monster Legends Mod", 
        description: "Unlimited Gems & Gold!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Access unlimited gems and gold in Monster Legends for faster progression. iOS & Android supported.`,
        faqs: [
            { question: "Is this permanent?", answer: "Resources persist locally; server-side sync may vary." },
            { question: "Platforms?", answer: "iOS & Android." }
        ],
        url: "https://www.appsg.site/app/monster-legends-mod"
    },
    { 
        slug: "scrabble-go-mod",
        img: "https://i.imgur.com/7lJAiF0.jpeg", 
        author: "TapTweak", 
        name: "Scrabble GO Mod", 
        description: "Unlimited Gems!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Play Scrabble GO with unlimited gems to unlock themes and bonuses. iOS & Android supported.`,
        faqs: [
            { question: "Fair play concerns?", answer: "Play respectfully and avoid competitive misuse." },
            { question: "OS supported?", answer: "iOS & Android." }
        ],
        url: "https://www.appsg.site/app/scrabble-go-mod"
    },
    { 
        slug: "state-of-survival-mod",
        img: "https://i.imgur.com/qK0wUbz.jpeg", 
        author: "TapTweak", 
        name: "State of Survival Mod", 
        description: "Unlimited Biocaps & Resources!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Gather unlimited biocaps and resources in State of Survival. Build faster on iOS & Android.`,
        faqs: [
            { question: "Online safety?", answer: "Mods may be detected; use in non-competitive contexts." },
            { question: "Platforms?", answer: "iOS & Android." }
        ],
        url: "https://www.appsg.site/app/state-of-survival-mod"
    },
    { 
        slug: "hungry-shark-evolution-mod",
        img: "https://i.imgur.com/Dcid1F2.jpeg", 
        author: "TapTweak", 
        name: "Hungry Shark Evolution Mod", 
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Swim with unlimited gems and coins in Hungry Shark Evolution. iOS & Android supported.`,
        faqs: [
            { question: "Offline mode?", answer: "Works offline; online sync may vary by region." },
            { question: "OS support?", answer: "iOS & Android." }
        ],
        url: "https://www.appsg.site/app/hungry-shark-evolution-mod"
    },
    { 
        slug: "soul-knight-mod",
        img: "https://i.imgur.com/MxN7vqH.jpeg", 
        author: "TapTweak", 
        name: "Soul Knight Mod", 
        description: "Unlimited Gems!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Unlock unlimited gems in Soul Knight to upgrade characters and gear. iOS & Android supported.`,
        faqs: [
            { question: "Is this detectable?", answer: "We aim to keep it safe, but detection is possible in online modes." },
            { question: "Supported devices?", answer: "iOS and Android." }
        ],
        url: "https://www.appsg.site/app/soul-knight-mod"
    },
    { 
        slug: "criminal-case-mod",
        img: "https://i.imgur.com/bkhqT3H.jpeg", 
        author: "TapTweak", 
        name: "Criminal Case Mod", 
        description: "Unlimited Cash & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Investigate with unlimited money in Criminal Case to speed through cases. iOS & Android supported.`,
        faqs: [
            { question: "Progress sync?", answer: "Local progress persists; server sync may vary." },
            { question: "Platforms supported?", answer: "iOS & Android." }
        ],
        url: "https://www.appsg.site/app/criminal-case-mod"
    },
    { 
        slug: "frag-pro-shooter-mod",
        img: "https://i.imgur.com/AGM5hqE.jpeg", 
        author: "TapTweak", 
        name: "FRAG Pro Shooter Mod", 
        description: "Unlimited Diamonds & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Battle with unlimited diamonds and coins in FRAG Pro Shooter. iOS & Android supported.`,
        faqs: [
            { question: "Competitive use?", answer: "Avoid competitive misuse to maintain fair play." },
            { question: "OS?", answer: "iOS & Android support." }
        ],
        url: "https://www.appsg.site/app/frag-pro-shooter-mod"
    },
    { 
        slug: "dc-legends-mod",
        img: "https://i.imgur.com/OBHbEhE.jpeg", 
        author: "TapTweak", 
        name: "DC Legends Mod", 
        description: "Unlimited Gems & Energy!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Lead your DC heroes with unlimited gems and energy. Works on iOS & Android.`,
        faqs: [
            { question: "Ban risk?", answer: "Always a possibility in online play; use responsibly." },
            { question: "Platforms supported?", answer: "iOS and Android." }
        ],
        url: "https://www.appsg.site/app/dc-legends-mod"
    },
    { 
        slug: "fr-legends-mod",
        img: "https://i.imgur.com/ZxpS32A.jpeg", 
        author: "TapTweak", 
        name: "FR Legends Mod", 
        description: "Unlimited Money!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `FR Legends Mod – Drift Racing with Unlimited Money\n\nWhat you get\n- Unlimited Money to buy cars, engines, parts and body kits\n- Unlock tracks, liveries and visual customization\n- Best used in single‑player and offline modes\n\nHow to install (iOS & Android)\n1) Tap Download and install FR Legends Mod\n2) Open the game and accept required permissions\n3) Money syncs automatically – start buying and upgrading freely\n\nTuning tips for higher drift score\n- Begin around 300–350hp on entry cars for balance\n- Slightly increase rear wheel grip for stable exits\n- Lower tire pressure for longer, smoother slides\n\nCompatibility\n- iOS 12+ and Android 7+ supported\n- Works on phones and tablets`,
        faqs: [
            { question: "Is it safe for multiplayer?", answer: "Use at your own risk. Prefer offline/single‑player to minimize detection." },
            { question: "Do I need root or jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will purchases remain after uninstall?", answer: "Resources are active while the mod is installed; removing it may revert progress." },
            { question: "Performance tips?", answer: "On older devices, lower graphics or disable 60fps for smoother runs." }
        ],
        url: "https://www.appsg.site/app/fr-legends-mod"
    },
    { 
        slug: "dungeon-hunter-5-mod",
        img: "https://i.imgur.com/fZaPTZk.jpeg", 
        author: "TapTweak", 
        name: "Dungeon Hunter 5 Mod", 
        description: "Unlimited Gems!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Dungeon Hunter 5 Mod – Action RPG with Unlimited Gems\n\nWhat you get\n- Unlimited Gems to craft gear, enhance skills and speed up progress\n- Faster dungeon clears and boss fights\n- Best used in campaign and offline modes\n\nHow to install (iOS & Android)\n1) Tap Download and install Dungeon Hunter 5 Mod\n2) Open the game and complete the tutorial\n3) Gems sync automatically; start crafting and upgrading\n\nProgress tips\n- Focus on weapon synergy and elemental counters early\n- Upgrade survivability (armor/skills) before pushing higher tiers\n\nCompatibility\n- iOS 12+ and Android 7+; phones and tablets supported`,
        faqs: [
            { question: "Is it safe for multiplayer?", answer: "We do not recommend competitive modes; use responsibly in PvE/campaign." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard devices." },
            { question: "Will progress remain after uninstall?", answer: "Gem advantages apply while the mod is installed; removing it may revert." },
            { question: "Performance tips?", answer: "Lower effects quality and cap FPS on older devices for smoother runs." }
        ],
        url: "https://www.appsg.site/app/dungeon-hunter-5-mod"
    },
    { 
        slug: "looney-tunes-world-of-mayhem-mod",
        img: "https://i.imgur.com/ILYs6Lg.jpeg", 
        author: "TapTweak", 
        name: "Looney Tunes™ World of Mayhem Mod", 
        description: "Unlimited Gems & Gold!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Looney Tunes™ World of Mayhem Mod – Collect Toons with Unlimited Gems & Gold\n\nWhat you get\n- Unlimited Gems & Gold to unlock toons and power up faster\n- Speed through events, campaigns and PvE battles\n- Best used outside competitive PvP modes\n\nHow to install (iOS & Android)\n1) Tap Download and install Looney Tunes World of Mayhem Mod\n2) Open the game and finish the intro\n3) Resources sync automatically – start unlocking and upgrading toons\n\nTeam tips\n- Build synergistic teams (tank, support, damage) for PvE consistency\n- Focus on a core squad and star‑rank them first\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for PvP?", answer: "We recommend sticking to PvE; competitive modes may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Advantages apply while installed; uninstalling may revert some benefits." },
            { question: "Performance tips?", answer: "Disable high effects on older devices for smoother animations." }
        ],
        url: "https://www.appsg.site/app/looney-tunes-world-of-mayhem-mod"
    },
    { 
        slug: "need-for-speed-no-limits-mod",
        img: "https://i.imgur.com/5Yqlgg5.jpeg", 
        author: "TapTweak", 
        name: "Need for Speed™ No Limits Mod", 
        description: "Unlimited Money & Gold!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Need for Speed™ No Limits Mod – Street Racing with Unlimited Money & Gold\n\nWhat you get\n- Unlimited Money & Gold to buy cars, parts and visual upgrades\n- Skip grind and unlock event requirements faster\n- Best used in single‑player events and offline modes\n\nHow to install (iOS & Android)\n1) Tap Download and install NFS No Limits Mod\n2) Open the game and complete the intro race\n3) Resources sync automatically – upgrade your garage\n\nTuning tips\n- Start with ECU and Turbo for best performance per cost\n- Balance Nitro with Tires to keep traction on corners\n\nCompatibility\n- iOS 12+ and Android 7+; phones and tablets supported`,
        faqs: [
            { question: "Is it safe for online?", answer: "Avoid competitive modes; use responsibly in offline or casual events." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects detail and cap FPS on older devices for smoother races." }
        ],
        url: "https://www.appsg.site/app/need-for-speed-no-limits-mod"
    },
    { 
        slug: "ice-age-adventures-mod",
        img: "https://i.imgur.com/Bx69dSO.jpeg", 
        author: "TapTweak", 
        name: "Ice Age Adventures Mod", 
        description: "Unlimited Acorns!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Ice Age Adventures Mod – Family Adventure with Unlimited Acorns\n\nWhat you get\n- Unlimited Acorns to rescue friends and build faster\n- Speed through story chapters and time‑limited events\n- Best used in offline and casual modes\n\nHow to install (iOS & Android)\n1) Tap Download and install Ice Age Adventures Mod\n2) Open the game and finish the tutorial\n3) Acorns sync automatically – start rescuing and building\n\nProgress tips\n- Prioritize resource buildings early for steady progression\n- Save boosts for multi‑stage event chains\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe online?", answer: "Use casually and avoid competitive leaderboards to reduce risk." },
            { question: "Need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress remain after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some progress." },
            { question: "Performance tips?", answer: "Lower effects and disable extra animations on older devices." }
        ],
        url: "https://www.appsg.site/app/ice-age-adventures-mod"
    },
    { 
        slug: "score-hero-2022-mod",
        img: "https://i.imgur.com/ujRHvBz.jpeg", 
        author: "TapTweak", 
        name: "Score! Hero 2022 Mod", 
        description: "Unlimited Money!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Score! Hero 2022 Mod – Football Career with Unlimited Money\n\nWhat you get\n- Unlimited Money to unlock levels, retries and training faster\n- Progress through career chapters without grind\n- Best used in offline/casual modes\n\nHow to install (iOS & Android)\n1) Tap Download and install Score! Hero 2022 Mod\n2) Open the game and complete the first tutorial level\n3) Resources sync automatically – continue your career\n\nPlay tips\n- Use curved swipes for top‑corner shots\n- Spend retries wisely on multi‑pass objectives\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for ranked leaderboards?", answer: "Avoid competitive leaderboards to reduce detection risk." },
            { question: "Need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower crowd/effects on older devices for smoother play." }
        ],
        url: "https://www.appsg.site/app/score-hero-2022-mod"
    },
    { 
        slug: "gangstar-vegas-mod",
        img: "https://i.imgur.com/GtpkLZt.jpeg", 
        author: "TapTweak", 
        name: "Gangstar Vegas Mod", 
        description: "Unlimited Diamonds & Money!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Gangstar Vegas Mod – Open-World Action with Unlimited Diamonds & Money\n\nWhat you get\n- Unlimited Diamonds & Money for vehicles, weapons and upgrades\n- Faster story progress and city takeovers\n- Best used in offline/free‑roam and non‑competitive modes\n\nHow to install (iOS & Android)\n1) Tap Download and install Gangstar Vegas Mod\n2) Open the game and complete the intro mission\n3) Resources sync automatically – start upgrading and exploring\n\nPlay tips\n- Prioritize armor and mobility early for survivability\n- Save premium vehicles for missions with strict timers\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe online?", answer: "Avoid competitive/online events to minimize detection risk." },
            { question: "Need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower shadows/effects on older devices to reduce frame drops." }
        ],
        url: "https://www.appsg.site/app/gangstar-vegas-mod"
    },
    { 
        slug: "dislyte-mod",
        img: "https://i.imgur.com/O1IAYpK.jpeg", 
        author: "TapTweak", 
        name: "Dislyte Mod", 
        description: "Unlimited Crystals & Gold!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Dislyte Mod – Mythic RPG Squad with Unlimited Crystals & Gold\n\nWhat you get\n- Unlimited Crystals & Gold to summon espers and upgrade relics\n- Faster progression through story, events and trials\n- Best used in PvE modes to reduce detection risk\n\nHow to install (iOS & Android)\n1) Tap Download and install Dislyte Mod\n2) Open the game and finish the tutorial fights\n3) Resources sync automatically – start summoning and upgrading\n\nTeam tips\n- Build balanced teams (damage, support, control) for consistent clears\n- Prioritize core relic upgrades on carries first\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for PvP?", answer: "We recommend PvE only; ranked PvP may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert gains." },
            { question: "Performance tips?", answer: "Lower effects and background animations on older devices." }
        ],
        url: "https://www.appsg.site/app/dislyte-mod"
    },
    { 
        slug: "the-wolf-mod",
        img: "https://i.imgur.com/KRobVTS.jpeg", 
        author: "TapTweak", 
        name: "The Wolf Mod", 
        description: "Unlimited Gems & Money!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `The Wolf Mod – Online RPG Simulator with Unlimited Gems & Money\n\nWhat you get\n- Unlimited Gems & Money to unlock wolves, skills and skins\n- Faster progression in PvE hunts and exploration\n- Best used in casual/non‑competitive rooms\n\nHow to install (iOS & Android)\n1) Tap Download and install The Wolf Mod\n2) Open the game and complete the short tutorial\n3) Resources sync automatically – upgrade your wolf and explore\n\nPlay tips\n- Prioritize damage and stamina early for efficient hunts\n- Team up in co‑op hunts for faster XP and loot\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for multiplayer?", answer: "Avoid competitive lobbies; use responsibly in casual PvE hunts." },
            { question: "Need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress remain after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower vegetation and shadows on older devices for smoother play." }
        ],
        url: "https://www.appsg.site/app/the-wolf-mod"
    },
    { 
        slug: "traffic-rider-mod",
        img: "https://i.imgur.com/h3eF6FU.jpeg", 
        author: "TapTweak", 
        name: "Traffic Rider Mod", 
        description: "Unlimited Money & Cash!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Traffic Rider Mod – First‑Person Motorcycle with Unlimited Money & Cash\n\nWhat you get\n- Unlimited Money & Cash to buy bikes and performance parts\n- Unlock career tiers and challenges faster\n- Best used in offline/casual modes\n\nHow to install (iOS & Android)\n1) Tap Download and install Traffic Rider Mod\n2) Open the game and complete the first ride\n3) Resources sync automatically – start upgrading your bike\n\nRiding tips\n- Maintain 100+ km/h for score multipliers\n- Near‑miss cars and ride opposite lane (with caution) for bonus points\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for online?", answer: "Avoid competitive leaderboards; use responsibly in offline modes." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress remain after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower traffic density and effects on older devices for smoother play." }
        ],
        url: "https://www.appsg.site/app/traffic-rider-mod"
    },
    { 
        slug: "skullgirls-mod",
        img: "https://i.imgur.com/xvhkfhL.jpeg", 
        author: "TapTweak", 
        name: "Skullgirls Mod", 
        description: "Unlimited Theonite!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Skullgirls Mod – 2D Fighting RPG with Unlimited Theonite\n\nWhat you get\n- Unlimited Theonite to summon fighters and expand your roster\n- Faster progression in story, events and prize fights\n- Best used in PvE/practice to reduce detection risk\n\nHow to install (iOS & Android)\n1) Tap Download and install Skullgirls Mod\n2) Open the game and complete the tutorial fight\n3) Theonite syncs automatically – start summoning and upgrading\n\nPlay tips\n- Focus on synergy teams and meter management\n- Upgrade core moves on your main carry first\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for ranked/prize fights?", answer: "We recommend PvE & training; competitive modes may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects and background layers on older devices for smoother battles." }
        ],
        url: "https://www.appsg.site/app/skullgirls-mod"
    },
    { 
        slug: "infinity-kingdom-mod",
        img: "https://i.imgur.com/epyQAFG.jpeg", 
        author: "TapTweak", 
        name: "Infinity Kingdom Mod", 
        description: "Unlimited Gems!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Infinity Kingdom Mod – Strategy Builder with Unlimited Gems\n\nWhat you get\n- Unlimited Gems to speed buildings, research and summons\n- Faster progression across PvE and events\n- Best used carefully in alliance contexts\n\nHow to install (iOS & Android)\n1) Tap Download and install Infinity Kingdom Mod\n2) Open the game and finish the tutorial\n3) Gems sync automatically – start upgrading and training\n\nStrategy tips\n- Keep builders active and research queued at all times\n- Focus on a core immortal team and synergy artifacts first\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for alliances/competitive?", answer: "Use responsibly; competitive use may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects and background activity on older devices to save battery." }
        ],
        url: "https://www.appsg.site/app/infinity-kingdom-mod"
    },
    { 
        slug: "mighty-party-mod",
        img: "https://i.imgur.com/TnqOIo0.jpeg", 
        author: "TapTweak", 
        name: "Mighty Party Mod", 
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Mighty Party Mod – Hero Battler with Unlimited Gems & Coins\n\nWhat you get\n- Unlimited Gems & Coins to summon heroes and upgrade faster\n- Accelerated progression through story, events and trials\n- Best used in PvE and casual arenas\n\nHow to install (iOS & Android)\n1) Tap Download and install Mighty Party Mod\n2) Open the game and complete the tutorial battles\n3) Resources sync automatically – start summoning and upgrading\n\nTeam tips\n- Build balanced teams (frontline, damage, support) for consistency\n- Focus upgrades on a core carry and synergy passives first\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for ranked PVP?", answer: "We recommend PvE/casual only; competitive play may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects and background animations on older devices for smoother play." }
        ],
        url: "https://www.appsg.site/app/mighty-party-mod"
    },
    { 
        slug: "pocket-troops-mod",
        img: "https://i.imgur.com/GUU5sXx.jpeg", 
        author: "TapTweak", 
        name: "Pocket Troops Mod", 
        description: "Unlimited Coins & Cash!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Pocket Troops Mod – Tactical Squad with Unlimited Coins & Cash\n\nWhat you get\n- Unlimited Coins & Cash to recruit, train and gear up faster\n- Speed up base upgrades and unit progression\n- Best used in PvE, campaigns and casual modes\n\nHow to install (iOS & Android)\n1) Tap Download and install Pocket Troops Mod\n2) Open the game and complete the tutorial mission\n3) Resources sync automatically – start training and upgrading\n\nStrategy tips\n- Build a balanced squad (tank, DPS, support) and upgrade core skills first\n- Prioritize weapon tiers that fit your mission type\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for clan wars/competitive?", answer: "Prefer PvE/casual modes; competitive use may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects and background animations on older devices for smoother play." }
        ],
        url: "https://www.appsg.site/app/pocket-troops-mod"
    },
    { 
        slug: "top-war-mod",
        img: "https://i.imgur.com/GTAlQzP.jpeg", 
        author: "TapTweak", 
        name: "Top War Mod", 
        description: "Unlimited Diamonds & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Top War Mod – Merge Strategy with Unlimited Diamonds & Coins\n\nWhat you get\n- Unlimited Diamonds & Coins to speed buildings, merges and research\n- Faster progress through campaigns, events and tech trees\n- Best used responsibly in alliance contexts\n\nHow to install (iOS & Android)\n1) Tap Download and install Top War Mod\n2) Open the game and finish the tutorial\n3) Resources sync automatically – start merging and upgrading\n\nStrategy tips\n- Keep merges efficient; avoid fragmenting unit tiers\n- Maintain research queues and expand builders for constant growth\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for alliances/competitive?", answer: "Use carefully; competitive modes may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects and background tasks to reduce battery drain on older devices." }
        ],
        url: "https://www.appsg.site/app/top-war-mod"
    },
    { 
        slug: "war-and-order-mod",
        img: "https://i.imgur.com/pvaRLDg.jpeg", 
        author: "TapTweak", 
        name: "War and Order Mod", 
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `War and Order Mod – Strategy War with Unlimited Gems & Coins\n\nWhat you get\n- Unlimited Gems & Coins to speed buildings, research and troop training\n- Faster expansion across campaigns, events and alliance tech\n- Best used carefully in alliance/competitive contexts\n\nHow to install (iOS & Android)\n1) Tap Download and install War and Order Mod\n2) Open the game and finish the tutorial\n3) Resources sync automatically – start upgrading and training\n\nStrategy tips\n- Keep builders and research queues active for constant growth\n- Focus on a core march composition and counter enemy matchups\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for alliances/competitive?", answer: "Use responsibly; competitive use may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects and enable battery saver on older devices to reduce heat and drain." }
        ],
        url: "https://www.appsg.site/app/war-and-order-mod"
    },
    { 
        slug: "world-chef-mod",
        img: "https://i.imgur.com/lJGGZN4.jpeg", 
        author: "TapTweak", 
        name: "World Chef Mod", 
        description: "Unlimited Gems & Gold!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `World Chef Mod – Restaurant Builder with Unlimited Gems & Gold\n\nWhat you get\n- Unlimited Gems & Gold to speed cooking, decor and expansion\n- Unlock chefs, recipes and furniture faster\n- Best used in casual/offline modes\n\nHow to install (iOS & Android)\n1) Tap Download and install World Chef Mod\n2) Open the game and complete the intro orders\n3) Resources sync automatically – start decorating and expanding\n\nPlay tips\n- Keep appliances running; queue longer recipes overnight\n- Invest in decor that boosts rating and customer tips\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe online?", answer: "Use casually; competitive rankings may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects and limit background apps on older devices." }
        ],
        url: "https://www.appsg.site/app/world-chef-mod"
    },
    { 
        slug: "angry-birds-evolution-mod",
        img: "https://i.imgur.com/BXKcVmy.jpeg", 
        author: "TapTweak", 
        name: "Angry Birds Evolution Mod", 
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Angry Birds Evolution Mod – Collect & Evolve with Unlimited Gems & Coins\n\nWhat you get\n- Unlimited Gems & Coins to open eggs, evolve birds and speed upgrades\n- Faster progress through campaigns, events and PvE battles\n- Best used in casual/non‑competitive modes\n\nHow to install (iOS & Android)\n1) Tap Download and install Angry Birds Evolution Mod\n2) Open the game and complete the tutorial match\n3) Resources sync automatically – start hatching and evolving\n\nPlay tips\n- Focus on a core team and evolve them before spreading resources\n- Save premium hatches for event rate‑ups\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for competitive play?", answer: "Prefer PvE/casual; ranked/competitive use may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects and background animations on older devices for smoother play." }
        ],
        url: "https://www.appsg.site/app/angry-birds-evolution-mod"
    },
    { 
        slug: "project-makeover-mod",
        img: "https://i.imgur.com/IO2IdIQ.jpeg", 
        author: "TapTweak", 
        name: "Project Makeover Mod", 
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Project Makeover Mod – Match‑3 Makeovers with Unlimited Gems & Coins\n\nWhat you get\n- Unlimited Gems & Coins to unlock outfits, decor and power‑ups\n- Progress faster through makeover stories and events\n- Best used in casual/offline modes\n\nHow to install (iOS & Android)\n1) Tap Download and install Project Makeover Mod\n2) Open the game and complete the intro puzzle\n3) Resources sync automatically – start styling and renovating\n\nPlay tips\n- Save boosters for hard levels with blockers and tight move counts\n- Focus on high‑impact decor for better client ratings\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for leaderboards?", answer: "Prefer casual play; leaderboards may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Disable extra animations and lower effects on older devices." }
        ],
        url: "https://www.appsg.site/app/project-makeover-mod"
    },
    { 
        slug: "basketball-stars-mod",
        img: "https://i.imgur.com/U0tFpXg.jpeg", 
        author: "TapTweak", 
        name: "Basketball Stars Mod", 
        description: "Unlimited Money & Gold!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Basketball Stars Mod – 1v1 Hoops with Unlimited Money & Gold\n\nWhat you get\n- Unlimited Money & Gold to unlock balls, courts and gear\n- Faster upgrades and cosmetics for your player\n- Best used in casual/offline modes\n\nHow to install (iOS & Android)\n1) Tap Download and install Basketball Stars Mod\n2) Open the game and complete the intro match\n3) Resources sync automatically – start upgrading and styling\n\nPlay tips\n- Mix fakes and crossovers; time shots at peak jump\n- Use gear bonuses that boost accuracy and steal resistance\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for ranked online?", answer: "Prefer casual play; ranked modes may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects and cap FPS on older devices for smoother gameplay." }
        ],
        url: "https://www.appsg.site/app/basketball-stars-mod"
    },
    { 
        slug: "disney-heroes-mod",
        img: "https://i.imgur.com/wpvpO0V.jpeg", 
        author: "TapTweak", 
        name: "Disney Heroes Mod", 
        description: "Unlimited Diamonds & Gold!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Disney Heroes Mod – Squad RPG with Unlimited Diamonds & Gold\n\nWhat you get\n- Unlimited Diamonds & Gold to summon, rank up and upgrade disks\n- Faster progress through campaign, trials and events\n- Best used in PvE and casual modes\n\nHow to install (iOS & Android)\n1) Tap Download and install Disney Heroes Mod\n2) Open the game and finish the intro battles\n3) Resources sync automatically – start building your squad\n\nTeam tips\n- Build balanced teams (tank, support, damage, control)\n- Prioritize key disks and rank ups on your main carry first\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for PvP/leaderboards?", answer: "Prefer PvE/casual; competitive use may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects and background animations on older devices." }
        ],
        url: "https://www.appsg.site/app/disney-heroes-mod"
    },
    { 
        slug: "lilys-garden-mod",
        img: "https://i.imgur.com/dee3c7i.jpeg", 
        author: "TapTweak", 
        name: "Lily's Garden Mod", 
        description: "Unlimited Stars & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Lily's Garden Mod – Match‑3 Renovations with Unlimited Stars & Coins\n\nWhat you get\n- Unlimited Stars & Coins to unlock renovations and story chapters\n- Progress faster through puzzles and events\n- Best used in casual/offline modes\n\nHow to install (iOS & Android)\n1) Tap Download and install Lily's Garden Mod\n2) Open the game and complete the first puzzle\n3) Resources sync automatically – start renovating the garden\n\nPlay tips\n- Save boosters for hard levels with blockers\n- Chain large matches for higher score and extra moves\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for leaderboards?", answer: "Prefer casual play; leaderboards may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Disable extra animations and lower effects on older devices." }
        ],
        url: "https://www.appsg.site/app/lilys-garden-mod"
    },
    { 
        slug: "tennis-clash-mod",
        img: "https://i.imgur.com/KuqWj0q.jpeg", 
        author: "TapTweak", 
        name: "Tennis Clash Mod", 
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Tennis Clash Mod – Online Tennis with Unlimited Gems & Coins\n\nWhat you get\n- Unlimited Gems & Coins to unlock rackets, strings and outfits\n- Faster upgrades for power, accuracy and agility\n- Best used in casual/offline modes\n\nHow to install (iOS & Android)\n1) Tap Download and install Tennis Clash Mod\n2) Open the game and complete the tutorial rally\n3) Resources sync automatically – start upgrading your gear\n\nPlay tips\n- Time swipes at ball peak for higher accuracy and speed\n- Equip strings that complement your build (power vs. control)\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for ranked matches?", answer: "Prefer casual play; ranked modes may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects and cap FPS on older devices for smoother rallies." }
        ],
        url: "https://www.appsg.site/app/tennis-clash-mod"
    },
    { 
        slug: "pvz-heroes-mod",
        img: "https://i.imgur.com/t6RvgZr.jpeg", 
        author: "TapTweak", 
        name: "PvZ Heroes Mod", 
        description: "Unlimited Gems & Cards!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `PvZ Heroes Mod – Card Battler with Unlimited Gems & Cards\n\nWhat you get\n- Unlimited Gems & Cards to craft decks and upgrade heroes faster\n- Accelerated progress through campaign, challenges and events\n- Best used in casual/non‑competitive modes\n\nHow to install (iOS & Android)\n1) Tap Download and install PvZ Heroes Mod\n2) Open the game and complete the tutorial match\n3) Resources sync automatically – start building your deck\n\nDeck tips\n- Focus on a core hero strategy (tempo, control, combo)\n- Curve your mana costs and include reliable removal\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for ranked play?", answer: "Prefer casual modes; ranked/ladder may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects and turn off extra animations on older devices." }
        ],
        url: "https://www.appsg.site/app/pvz-heroes-mod"
    },
    { 
        slug: "nba-live-mobile-mod",
        img: "https://i.imgur.com/7xFvMdi.jpeg", 
        author: "TapTweak", 
        name: "NBA Live Mobile Mod", 
        description: "Unlimited Money!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `NBA Live Mobile Mod – Ultimate Team with Unlimited Cash & Coins\n\nWhat you get\n- Unlimited Cash & Coins to open packs and upgrade players\n- Faster team building, training and lineup boosts\n- Best used in casual modes and offline events\n\nHow to install (iOS & Android)\n1) Tap Download and install NBA Live Mobile Mod\n2) Open the game and complete the intro drills\n3) Resources sync automatically – start upgrading your lineup\n\nPlay tips\n- Focus on a core lineup; upgrade chemistries for bigger boosts\n- Practice release timing to raise field goal percentage\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for ranked/online?", answer: "Prefer casual/offline; ranked may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects and cap FPS on older devices for smoother gameplay." }
        ],
        url: "https://www.appsg.site/app/nba-live-mobile-mod"
    },
    { 
        slug: "dragon-mania-legends-mod",
        img: "https://i.imgur.com/xhAYWdn.jpeg", 
        author: "TapTweak", 
        name: "Dragon Mania Legends Mod", 
        description: "Unlimited Gems & Coins!",
        version: "1.0.0",
        size: "Varies",
        category: "Games",
        longDescription: `Dragon Mania Legends Mod – Breed & Train with Unlimited Gems & Coins\n\nWhat you get\n- Unlimited Gems & Coins to hatch eggs, speed breeding and upgrades\n- Faster habitat expansion and event progression\n- Best used in casual/non‑competitive modes\n\nHow to install (iOS & Android)\n1) Tap Download and install Dragon Mania Legends Mod\n2) Open the game and finish the tutorial\n3) Resources sync automatically – start breeding and upgrading\n\nBreeding tips\n- Use compatible elements for higher‑tier outcomes\n- Prioritize habitat capacity and gold farms early\n\nCompatibility\n- iOS 12+ and Android 7+ supported`,
        faqs: [
            { question: "Is it safe for online events/leagues?", answer: "Prefer PvE/casual; competitive use may increase detection risk." },
            { question: "Do I need root/jailbreak?", answer: "No. Works on standard iOS and Android devices." },
            { question: "Will progress persist after uninstall?", answer: "Benefits apply while installed; uninstalling may revert some gains." },
            { question: "Performance tips?", answer: "Lower effects and background animations on older devices for smoother play." }
        ],
        url: "https://www.appsg.site/app/dragon-mania-legends-mod"
    }
];

export const apps: App[] = appData.map((app, index) => ({
  ...app,
  id: index + 1,
  // Make sure the name property is set from title
  name: app.name || app.title,
}));

    