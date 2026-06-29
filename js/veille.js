/* ============================================================
   VEILLE.JS — Données et logique de la page Veille Techno
   ============================================================ */

const veilleData = {
  ai: {
    icon:"🤖",
    name: { fr:"IA & OUTILS DE DEV", en:"AI & DEV TOOLS"},
    desc: { fr:"Assistants IA, GitHub Copilot, scripts", en:"AI assistants, GitHub Copilot, scripts"},
    articles: [
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "GENERATION-NT",
        tags:    ["GitHub","Copilot","IA", "Confidentialité"],
        title:   {
          fr: "GitHub souhaite utiliser certaines données Copilot pour entraîner ses modèles d'IA",
          en:"GitHub wants to use Copilot data to train its AI models"
        },
        excerpt: {
          fr: "GitHub prévoit d'utiliser certaines données d'interaction provenant des utilisateurs de Copilot pour améliorer ses modèles d'intelligence artificielle. Cette collecte ne concerne que certains abonnements et les utilisateurs auront la possibilité de désactiver cette utilisation de leurs données. Cette initiative soulève des questions sur la confidentialité et l'exploitation des interactions avec les assistants IA.",
          en:"GitHub plans to use certain interaction data from Copilot users to improve its artificial intelligence models. This data collection only applies to specific subscription plans, and users will be able to opt out. The initiative raises questions about privacy and the use of interactions with AI assistants."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "KORBEN",
        tags:    ["Windows","IA","Agents autonomes", "Sécurité","Insider"],
        title:   {
          fr: "Windows ouvre la voie aux agents IA autonomes, soulevant de nouvelles questions de sécurité",
          en:"Windows opens the door to autonomous AI agents, raising new security concerns"
        },
        excerpt: {
          fr: "Microsoft introduit dans Windows Insider un framework appelé Agent Launchers, permettant à des agents IA de s'enregistrer auprès du système pour interagir avec les fichiers et applications de l'utilisateur. Ces assistants peuvent exécuter des actions de manière autonome dans un environnement isolé, sans validation à chaque étape. Cette évolution, présentée comme une extension majeure de Windows pour les développeurs d'IA, soulève cependant des préoccupations importantes en matière de sécurité et de contrôle des actions automatisées.",
          en:"Microsoft is introducing a framework called Agent Launchers in Windows Insider, allowing AI agents to register with the operating system and interact with user files and applications. These assistants can perform actions autonomously in an isolated environment without requiring user confirmation at every step. While positioned as a major step forward for AI development on Windows, this shift raises significant security and control concerns regarding automated system actions."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "LEMAGIT",
        tags:    ["OpenAI","IA","Finance","Entreprise"],
        title:   {
          fr: "OpenAI affiche une forte croissance malgré un déficit record",
          en: "OpenAI posts strong growth despite a record-breaking deficit"
        },
        excerpt: {
          fr: "Malgré une hausse importante de ses revenus, OpenAI continue d'enregistrer des pertes considérables. Selon des analyses d'HSBC et de Deutsche Bank, l'entreprise pourrait afficher l'un des plus grands déficits jamais observés pour une société de cette taille. Face à une concurrence accrue, notamment d'Anthropic, Sam Altman poursuit ses efforts pour conserver la position de leader d'OpenAI tout en assurant sa viabilité financière.",
          en: "Despite significant revenue growth, OpenAI continues to report substantial losses. According to analysts at HSBC and Deutsche Bank, the company could post one of the largest deficits ever seen for a business of its size. Facing increasing competition, particularly from Anthropic, Sam Altman is working to maintain OpenAI's leadership while ensuring its long-term financial sustainability."
        }
      },
      {
        date:    { fr:"Janvier 2026", en:"January 2026"},
        source: "THE REGISTER",
        tags:    ["Windows","IA","PowerShell","Confidentialité"],
        title:   {
          fr: "Un développeur publie un script pour supprimer toutes les fonctions IA de Windows",
          en: "Developer releases script to remove all AI features from Windows"
        },
        excerpt: {
          fr: "Des développeurs ont créé un script PowerShell nommé Remove Windows AI, destiné à supprimer les fonctionnalités d'intelligence artificielle intégrées à Windows 11. Le projet affirme que les futures versions du système embarqueront de plus en plus de composants IA et propose de les retirer afin d'améliorer les performances, la confidentialité et la sécurité des utilisateurs.",
          en: "Developers have created a PowerShell script called Remove Windows AI to eliminate artificial intelligence features built into Windows 11. The project argues that future Windows releases will include more AI components and aims to remove them to improve performance, privacy, and security."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "CLUBIC",
        tags:    ["Microsoft","Copilot","IA","Sécurité"],
        title:   {
          fr: "Une faille de Copilot permettait d'exécuter des prompts via un simple lien",
          en: "Copilot vulnerability allowed prompts to be executed through a simple link"
        },
        excerpt: {
          fr: "Des chercheurs de Varonis ont montré qu'un simple lien pouvait transmettre automatiquement une instruction à Microsoft Copilot via le paramètre d'URL « ?q= ». Cette technique de prompt injection ne nécessitait ni code caché ni intervention supplémentaire de l'utilisateur, exposant potentiellement des informations sensibles avant que Microsoft ne corrige ce comportement.",
          en: "Researchers at Varonis demonstrated that a simple link could automatically send a prompt to Microsoft Copilot through the URL's '?q=' parameter. This prompt injection technique required no hidden code or additional user interaction, potentially exposing sensitive information before Microsoft addressed the issue."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "TECHNIQUES DE L'INGÉNIEUR",
        tags:    ["IA","France","Innovation","Financement"],
        title:   {
          fr: "La France lance le programme « Pionniers de l'IA » pour soutenir l'innovation",
          en: "France launches the 'AI Pioneers' program to support innovation"
        },
        excerpt: {
          fr: "Le dispositif « Pionniers de l'IA » vise à accélérer le développement de projets innovants en intelligence artificielle grâce à des financements importants et des critères de sélection exigeants. Cette initiative s'inscrit dans la stratégie française de souveraineté technologique et ambitionne de transformer les avancées scientifiques en applications industrielles et sociétales concrètes.",
          en: "The 'AI Pioneers' initiative aims to accelerate innovative artificial intelligence projects through significant funding and demanding selection criteria. The program is part of France's technological sovereignty strategy and seeks to turn scientific advances into practical industrial and societal applications."
        }
      },
      {
        date:    { fr:"Août 2025", en:"August 2025"},
        source: "LE MONDE",
        tags:    ["IA","Europe","IA Act","Réglementation"],
        title:   {
          fr: "L'IA Act entre en vigueur et renforce la régulation européenne de l'intelligence artificielle",
          en: "The AI Act comes into force, strengthening Europe's AI regulation"
        },
        excerpt: {
          fr: "Les principales dispositions de l'IA Act, le règlement européen sur l'intelligence artificielle, entrent progressivement en vigueur. Malgré les critiques de l'administration américaine et de plusieurs grandes entreprises technologiques, l'Union européenne poursuit la mise en œuvre de l'une des législations les plus ambitieuses au monde afin d'encadrer le développement et l'utilisation des systèmes d'IA.",
          en: "The main provisions of the European Union's AI Act are gradually coming into force. Despite criticism from the U.S. administration and several major technology companies, the EU is moving forward with one of the world's most ambitious regulations to govern the development and use of artificial intelligence systems."
        }
      },
      {
        date:    { fr:"Août 2025", en:"August 2025"},
        source: "JOURNAL DU NET",
        tags:    ["IA","Publicité","Marketing","IA générative"],
        title:   {
          fr: "L'IA accélère la création publicitaire, mais pas forcément son efficacité",
          en: "AI speeds up advertising creation, but not necessarily its effectiveness"
        },
        excerpt: {
          fr: "L'intelligence artificielle générative permet désormais de produire rapidement des images, vidéos et textes publicitaires. Toutefois, cette augmentation de la capacité de production ne garantit pas des campagnes plus convaincantes. Les professionnels du secteur soulignent que la créativité, la pertinence du message et l'impact sur le public restent des facteurs essentiels au succès d'une campagne.",
          en: "Generative AI now enables advertisers to quickly produce images, videos, and marketing copy. However, increasing production speed does not necessarily result in more effective campaigns. Industry experts emphasize that creativity, relevance, and audience engagement remain the key factors behind successful advertising."
        }
      },
      {
        date:    { fr:"Août 2025", en:"August 2025"},
        source: "TOM'S HARDWARE",
        tags:    ["Anthropic","Claude","IA","macOS","Automation"],
        title:   {
          fr: "Anthropic permet à Claude de prendre le contrôle de votre Mac",
          en: "Anthropic allows Claude to take control of your Mac"
        },
        excerpt: {
          fr: "Anthropic a lancé une version préliminaire de ses outils Claude Code et Cowork, permettant aux abonnés Pro et Max sur macOS de déléguer à son IA la manipulation directe de leurs fichiers et logiciels. Cette évolution transforme Claude en véritable assistant capable d'interagir avec le système et d'automatiser de nombreuses tâches sur Mac.",
          en: "Anthropic has released a preview of its Claude Code and Cowork tools, allowing Pro and Max subscribers on macOS to let Claude directly manipulate files and applications. This evolution turns Claude into a true AI assistant capable of interacting with the operating system and automating many tasks on Mac."
        }
      },
    ]
  },
  web: {
    icon:"💻​",
    name: { fr: "SYSTÈME D'EXPLOITATION", en:"OPERATING SYSTEM"},
    desc: { fr:"Linux, Windows, MacOS", en:"Linux, Windows, MacOS"},
    articles: [
      {
        date:    { fr:"Avril 2026", en:"April 2026"},
        source: "Next.inc",
        tags:    ["Linux","OS","Ubuntu"],
        title:   { fr:"6 Go de mémoire vive sont désormais recommandés pour Ubuntu 26.04", en:"6 GB of RAM is now recommended for Ubuntu 26.04."},
        excerpt: { fr:"La première bêta d'Ubuntu 26.04 LTS révèle une augmentation discrète des exigences matérielles recommandées. Alors que les besoins en processeur (double cœur à 2 GHz) et en stockage (25 Go) restent inchangés par rapport à la précédente version LTS, la quantité minimale de mémoire vive recommandée passe de 4 Go à 6 Go pour assurer un fonctionnement confortable sur un ordinateur de bureau. La version finale est prévue pour le 23 avril et bénéficiera d'un support à long terme.",
                  en:"The first beta of Ubuntu 26.04 LTS quietly introduces higher recommended hardware requirements. While the CPU requirement (a 2 GHz dual-core processor) and storage space (25 GB) remain unchanged from the previous LTS release, the recommended minimum amount of RAM has increased from 4 GB to 6 GB to ensure smooth desktop performance. The final release is scheduled for April 23 and will receive long-term support."}
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "Igen",
        tags:    ["MacOS","OS"],
        title:   { fr:"La première bêta de tous les OS 26.5 est disponible pour les développeurs, sans grosses nouveautés", en:"The first beta of the 26.5 OS versions is available to developers, with no major new features."},
        excerpt: { fr: "Apple poursuit le développement de ses systèmes d'exploitation en lançant la première bêta des versions 26.5, seulement une semaine après la sortie des versions finales 26.4. Cette mise à jour concerne l'ensemble de l'écosystème Apple, notamment iOS, iPadOS, macOS, watchOS, tvOS et visionOS, permettant aux développeurs et testeurs d'essayer les nouveautés à venir sur tous les appareils de la marque.", 
                    en:"Apple continues the development of its operating systems by releasing the first beta of version 26.5, just one week after the final release of version 26.4. The update covers the entire Apple ecosystem, including iOS, iPadOS, macOS, watchOS, tvOS, and visionOS, giving developers and testers early access to upcoming features across all Apple devices."}
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "IT-CONNECT",
        tags:    ["MacOS","OS","Terminal","Cyber-security"],
        title:   { fr:"macOS 26.4 : le Terminal s'arme contre les attaques ClickFix", en:"macOS 26.4: Terminal arms itself against ClickFix attacks"},
        excerpt: { fr:"Avec macOS Tahoe 26.4, Apple a ajouté une nouvelle mesure de sécurité pour lutter contre les attaques de type ClickFix. Désormais, lorsqu'un utilisateur colle une commande jugée suspecte dans le Terminal, le système affiche un avertissement afin de prévenir les risques liés à l'exécution de commandes potentiellement malveillantes.", 
                    en:"With macOS Tahoe 26.4, Apple has introduced a new security feature to help protect users from ClickFix-style attacks. The system now displays a warning whenever a potentially suspicious command is pasted into the Terminal, helping users avoid executing malicious or harmful commands."}
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "GOODTECH",
        tags:    ["Android","OS","Terminal"],
        title:   { fr:"Du sérieux, enfin : le terminal Linux d'Android reçoit une nouvelle interface et une RAM ajustable", en:"Finally, something serious: Android's Linux terminal gets a new interface and adjustable RAM."},
        excerpt: { fr:"Google a mis à jour le terminal Linux intégré à Android dans sa version Canary, en lui apportant une interface modernisée et de nouveaux paramètres avancés. Cette évolution reflète les ambitions croissantes de l'entreprise pour Linux sur mobile, notamment en améliorant la gestion de la mémoire vive. Jusqu'ici limitée à 4 Go pour la machine virtuelle Debian, quelle que soit la RAM disponible sur l'appareil, cette allocation pouvait brider les performances sur les smartphones haut de gamme. La mise à jour Android Canary 2603 permet désormais de définir facilement une limite de RAM personnalisée directement depuis les paramètres, sans passer par une configuration manuelle complexe.", 
                    en:"Google has updated the Linux terminal integrated into Android's Canary version, introducing a modernized interface and advanced settings. This change highlights the company's growing ambitions for Linux on mobile, particularly by improving RAM management. Previously, the Debian virtual machine was capped at 4 GB of RAM regardless of the device's total memory, which limited performance on high-end smartphones. The Android Canary 2603 update now allows users to easily set a custom RAM limit directly in the settings, instead of manually editing a complex configuration file."}
      },
      {
        date:    { fr:"Juin 2026", en:"June 2026"},
        source: "TOMSHARDWARE",
        tags:    ["IA","macOS","Automation"],
        title:   {
          fr:"Anthropic permet à Claude de prendre le contrôle de votre Mac avec de nouveaux outils",
          en:"Anthropic lets Claude take control of your Mac with new tools"
        },
        excerpt: {
          fr:"Anthropic a lancé une version préliminaire de ses outils Claude Code et Cowork, permettant aux abonnés Pro et Max sur macOS de déléguer à son IA la manipulation directe de leurs fichiers et logiciels. Cette approche vise à étendre les capacités de Claude au-delà de la simple conversation, en lui donnant la possibilité d'interagir avec le système et d'automatiser certaines tâches sur Mac.",
          en:"Anthropic has released a preview of its Claude Code and Cowork tools, allowing Pro and Max subscribers on macOS to delegate direct manipulation of their files and applications to its AI. This approach aims to extend Claude beyond simple conversation by enabling it to interact with the system and automate tasks on Mac."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "GINJFO",
        tags:    ["Windows","macOS","Productivité","Entreprise"],
        title:   {
          fr:"Plantages, gels et redémarrages : Windows pénalise la productivité en entreprise",
          en:"Crashes, freezes and restarts: Windows imposes hidden productivity costs"
        },
        excerpt: {
          fr:"Le rapport State of Digital Workspace 2026 d'Omnissa, basé sur des données télémétriques anonymisées issues de millions de terminaux d'entreprise sur douze mois en 2025, met en évidence des différences de productivité entre Windows et macOS. L'étude souligne que macOS obtient de meilleurs résultats sur certains indicateurs liés aux interruptions système, comme les plantages, gels, redémarrages forcés et pertes de concentration, qui représentent des coûts invisibles mais importants pour les entreprises.",
          en:"The State of Digital Workspace 2026 report by Omnissa, based on anonymized telemetry data from millions of enterprise devices over a 12-month period in 2025, highlights productivity differences between Windows and macOS. The study shows that macOS performs better on certain system interruption metrics, including crashes, freezes, forced reboots, and recovery of user focus, which represent hidden but significant costs for businesses."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "GINJFO",
        tags:    ["Windows 11","Microsoft","Compte utilisateur","Installation"],
        title:   {
          fr:"Windows 11 : Microsoft pourrait lever l'obligation du compte Microsoft à l'installation",
          en:"Windows 11: Microsoft may remove the Microsoft account requirement during setup"
        },
        excerpt: {
          fr:"Scott Hanselman, vice-président chez Microsoft, a évoqué la possibilité que l'obligation d'utiliser un compte Microsoft lors de l'installation de Windows 11 disparaisse à l'avenir. Actuellement, les éditions Home et Pro exigent une connexion à un compte Microsoft pendant la configuration initiale, ce qui suscite des critiques de la part d'utilisateurs souhaitant utiliser un compte local sans connexion en ligne.",
          en:"Scott Hanselman, a Microsoft vice president, suggested that the requirement to use a Microsoft account during Windows 11 installation could be removed in the future. Currently, the Home and Pro editions require signing in with a Microsoft account during setup, which has sparked criticism from users who prefer using a local account without an online connection."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "CLUBIC",
        tags:    ["macOS","Malware","Sécurité","Cloudflare","Cyberattaque"],
        title:   {
          fr:"Un faux formulaire Cloudflare sur macOS permet à un malware de vider le trousseau de mots de passe",
          en:"Fake Cloudflare form on macOS enables malware to steal Keychain passwords"
        },
        excerpt: {
          fr:"Des chercheurs de Malwarebytes ont identifié un nouveau logiciel malveillant ciblant macOS, baptisé Infiniti Stealer. Il se propage via une fausse page de vérification Cloudflare qui incite l'utilisateur à exécuter lui-même une commande dans le Terminal (technique ClickFix). Une fois lancé, le malware peut voler des données sensibles comme les identifiants de navigateur, les mots de passe du trousseau macOS, les portefeuilles de cryptomonnaies et d'autres fichiers personnels, en exploitant la confiance de l'utilisateur plutôt qu'une faille système.",
          en:"Researchers at Malwarebytes have identified a new macOS malware called Infiniti Stealer. It spreads through a fake Cloudflare verification page that tricks users into running a Terminal command themselves (ClickFix technique). Once executed, the malware can steal sensitive data such as browser credentials, macOS Keychain passwords, cryptocurrency wallets, and other personal files by exploiting user trust rather than a system vulnerability."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "KORBEN",
        tags:    ["Windows","IA","Agents autonomes","Sécurité","Insider"],
        title:   {
          fr:"Windows ouvre la voie aux agents IA autonomes, soulevant de nouvelles questions de sécurité",
          en:"Windows opens the door to autonomous AI agents, raising new security concerns"
        },
        excerpt: {
          fr:"Microsoft introduit dans Windows Insider un framework appelé Agent Launchers, permettant à des agents IA de s'enregistrer auprès du système pour interagir avec les fichiers et applications de l'utilisateur. Ces assistants peuvent exécuter des actions de manière autonome dans un environnement isolé, sans validation à chaque étape. Cette évolution, présentée comme une extension majeure de Windows pour les développeurs d'IA, soulève cependant des préoccupations importantes en matière de sécurité et de contrôle des actions automatisées.",
          en:"Microsoft is introducing a framework called Agent Launchers in Windows Insider, allowing AI agents to register with the operating system and interact with user files and applications. These assistants can perform actions autonomously in an isolated environment without requiring user confirmation at every step. While positioned as a major step forward for AI development on Windows, this shift raises significant security and control concerns regarding automated system actions."
        }
      },

    ]
  },
  devops: {
    icon:"🛡️",
    name: { fr:"CYBER-SÉCURITÉ", en:"CYBER-SECURITY"},
    desc: { fr:"Protocoles, cybersécurité, piratages", en:"Protocols, cybersecurity, hacking"},
    articles: [
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "IT-CONNECT",
        tags:    ["MacOS","OS","Terminal","Cyber-security"],
        title:   { fr:"macOS 26.4 : le Terminal s'arme contre les attaques ClickFix", en:"macOS 26.4: Terminal arms itself against ClickFix attacks"},
        excerpt: { fr:"Avec macOS Tahoe 26.4, Apple a ajouté une nouvelle mesure de sécurité pour lutter contre les attaques de type ClickFix. Désormais, lorsqu'un utilisateur colle une commande jugée suspecte dans le Terminal, le système affiche un avertissement afin de prévenir les risques liés à l'exécution de commandes potentiellement malveillantes.", 
                    en:"With macOS Tahoe 26.4, Apple has introduced a new security feature to help protect users from ClickFix-style attacks. The system now displays a warning whenever a potentially suspicious command is pasted into the Terminal, helping users avoid executing malicious or harmful commands."}
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "CLUBIC",
        tags:    ["macOS","Malware","Sécurité","Cloudflare","Cyberattaque"],
        title:   {
          fr:"Un faux formulaire Cloudflare sur macOS permet à un malware de vider le trousseau de mots de passe",
          en:"Fake Cloudflare form on macOS enables malware to steal Keychain passwords"
        },
        excerpt: {
          fr:"Des chercheurs de Malwarebytes ont identifié un nouveau logiciel malveillant ciblant macOS, baptisé Infiniti Stealer. Il se propage via une fausse page de vérification Cloudflare qui incite l'utilisateur à exécuter lui-même une commande dans le Terminal (technique ClickFix). Une fois lancé, le malware peut voler des données sensibles comme les identifiants de navigateur, les mots de passe du trousseau macOS, les portefeuilles de cryptomonnaies et d'autres fichiers personnels, en exploitant la confiance de l'utilisateur plutôt qu'une faille système.",
          en:"Researchers at Malwarebytes have identified a new macOS malware called Infiniti Stealer. It spreads through a fake Cloudflare verification page that tricks users into running a Terminal command themselves (ClickFix technique). Once executed, the malware can steal sensitive data such as browser credentials, macOS Keychain passwords, cryptocurrency wallets, and other personal files by exploiting user trust rather than a system vulnerability."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "CLUBIC",
        tags:    ["Microsoft","Copilot","IA","Sécurité"],
        title:   {
          fr: "Une faille de Copilot permettait d'exécuter des prompts via un simple lien",
          en: "Copilot vulnerability allowed prompts to be executed through a simple link"
        },
        excerpt: {
          fr: "Des chercheurs de Varonis ont montré qu'un simple lien pouvait transmettre automatiquement une instruction à Microsoft Copilot via le paramètre d'URL « ?q= ». Cette technique de prompt injection ne nécessitait ni code caché ni intervention supplémentaire de l'utilisateur, exposant potentiellement des informations sensibles avant que Microsoft ne corrige ce comportement.",
          en: "Researchers at Varonis demonstrated that a simple link could automatically send a prompt to Microsoft Copilot through the URL's '?q=' parameter. This prompt injection technique required no hidden code or additional user interaction, potentially exposing sensitive information before Microsoft addressed the issue."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "LE MONDE",
        tags:    ["Cybersécurité","Éducation","Fuite de données","France"],
        title:   {
          fr: "Le piratage d'un logiciel expose les données de 243 000 agents de l'Éducation nationale",
          en: "Software breach exposes data of 243,000 French education staff"
        },
        excerpt: {
          fr: "Le ministère de l'Éducation nationale a annoncé que les données personnelles d'environ 243 000 agents, principalement des enseignants, ont été compromises après le piratage du logiciel de ressources humaines Compas. Les informations concernées incluent notamment les noms, adresses, numéros de téléphone et périodes d'absence, sans précision sur leur motif.",
          en: "France's Ministry of Education announced that the personal data of around 243,000 staff members, mainly teachers, was compromised following a cyberattack targeting the Compas human resources software. The exposed information includes names, postal addresses, phone numbers, and periods of absence, without revealing the reasons for those absences."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "ZONEBOURSE",
        tags:    ["Cisco","Cybersécurité","Acquisition","Entreprise"],
        title:   {
          fr: "Cisco envisagerait de racheter Axonius pour 2 milliards de dollars",
          en: "Cisco reportedly considers acquiring Axonius for $2 billion"
        },
        excerpt: {
          fr: "Selon plusieurs informations, Cisco serait en discussions pour acquérir Axonius, une entreprise israélienne spécialisée dans la gestion et la sécurisation des équipements informatiques, pour environ 2 milliards de dollars. Axonius a toutefois démenti ces rumeurs et affirme vouloir rester indépendante.",
          en: "Reports suggest that Cisco is in talks to acquire Axonius, an Israeli cybersecurity company specializing in asset management and device security, for around $2 billion. However, Axonius has denied the reports, stating that it intends to remain independent."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "ÉDUCATION NATIONALE",
        tags:    ["Cybersécurité","Éducation","Sensibilisation","Hameçonnage"],
        title:   {
          fr: "L'opération Cactus 2026 renforce la sensibilisation aux cybermenaces dans l'Éducation nationale",
          en: "Operation Cactus 2026 strengthens cybersecurity awareness in French schools"
        },
        excerpt: {
          fr: "Du 23 au 27 mars 2026, le ministère de l'Éducation nationale a organisé l'opération Cactus 2026 en partenariat avec plusieurs organismes publics. Cette campagne reposait sur une simulation d'hameçonnage afin de sensibiliser durablement les personnels et les élèves aux risques liés aux cyberattaques et aux bonnes pratiques de sécurité.",
          en: "From March 23 to 27, 2026, the French Ministry of Education conducted Operation Cactus 2026 in partnership with several public organizations. The campaign relied on a phishing simulation to raise long-term awareness among staff and students about cyber threats and cybersecurity best practices."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "USINE DIGITALE",
        tags:    ["Cybersécurité","Phishing","Europol","2FA"],
        title:   {
          fr: "La plateforme de phishing Tycoon2FA démantelée lors d'une opération internationale",
          en: "Tycoon2FA phishing platform dismantled in international operation"
        },
        excerpt: {
          fr: "La plateforme de phishing-as-a-service Tycoon2FA, utilisée pour contourner l'authentification multifacteur et compromettre des comptes à grande échelle, a été démantelée grâce à une opération coordonnée entre Europol, plusieurs forces de l'ordre et des entreprises du secteur privé. Cette action vise à réduire l'impact d'un des principaux services de phishing utilisés par les cybercriminels.",
          en: "The phishing-as-a-service platform Tycoon2FA, used to bypass multi-factor authentication and compromise accounts on a large scale, has been dismantled through a joint operation involving Europol, law enforcement agencies, and private-sector partners. The operation targeted one of the most widely used phishing services among cybercriminals."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "BFMTV",
        tags:    ["Cybersécurité","Russie","WhatsApp","Signal","Espionnage"],
        title:   {
          fr: "La Russie accusée d'avoir utilisé WhatsApp et Signal pour des cyberattaques",
          en: "Russia accused of using WhatsApp and Signal for cyberattacks"
        },
        excerpt: {
          fr: "Les autorités néerlandaises accusent la Russie d'avoir exploité WhatsApp et Signal pour mener des cyberattaques contre des fonctionnaires du gouvernement afin d'obtenir des informations sensibles. Cette campagne illustre l'utilisation croissante d'applications de messagerie légitimes comme vecteurs d'espionnage et d'ingénierie sociale.",
          en: "Dutch authorities accuse Russia of using WhatsApp and Signal to carry out cyberattacks against government officials in an attempt to access sensitive information. The campaign highlights the growing use of legitimate messaging apps as vectors for espionage and social engineering."
        }
      },
      {
        date:    { fr:"Mars 2026", en:"March 2026"},
        source: "SOLUTIONS NUMÉRIQUES",
        tags:    ["Cybersécurité","YggTorrent","Piratage","Fuite de données"],
        title:   {
          fr: "YggTorrent mis hors ligne après une cyberattaque majeure",
          en: "YggTorrent taken offline after major cyberattack"
        },
        excerpt: {
          fr: "Le tracker BitTorrent francophone YggTorrent est devenu inaccessible après une cyberattaque revendiquée par un pirate se faisant appeler « Gr0lum ». L'attaque aurait entraîné la suppression de serveurs ainsi que le vol de données internes, provoquant l'arrêt de l'un des principaux sites de téléchargement illégal francophones.",
          en: "The French BitTorrent tracker YggTorrent was taken offline following a cyberattack claimed by a hacker known as 'Gr0lum'. The attack reportedly resulted in server destruction and the theft of internal data, bringing one of the largest French-language piracy platforms offline."
        }
      },
      {
        date:    { fr:"Janvier 2026", en:"January 2026"},
        source: "LE FIGARO",
        tags:    ["Cybersécurité","SGS","Acquisition","Entreprise"],
        title:   {
          fr: "SGS renforce son activité cybersécurité avec le rachat de Panacea Infosec",
          en: "SGS strengthens its cybersecurity business with the acquisition of Panacea Infosec"
        },
        excerpt: {
          fr: "Le groupe suisse SGS a annoncé l'acquisition de l'entreprise indienne Panacea Infosec afin de renforcer son offre en cybersécurité. Spécialisée dans la sécurité des paiements, la protection des données et de la vie privée, Panacea Infosec permettra à SGS d'accélérer le développement de l'un de ses principaux axes de croissance.",
          en: "Swiss company SGS has announced the acquisition of the Indian firm Panacea Infosec to strengthen its cybersecurity services. Specializing in payment security, data protection, and privacy, Panacea Infosec will help SGS expand one of its key growth areas."
        }
      },
    ]
  }
};

// ---- Lire le thème demandé dans l'URL ----
// Ex: veille-detail.html?theme=ai
function loadVeilleDetail() {
  const params  = new URLSearchParams(window.location.search);
  const themeId = params.get('theme');
  const data    = veilleData[themeId];
  if (!data) { window.location.href ="veille.html"; return; }

  const lang = currentLang;

  document.getElementById('vd-icon').textContent  = data.icon;
  document.getElementById('vd-title').textContent = data.name[lang];
  document.getElementById('vd-desc').textContent  = data.desc[lang];
  document.getElementById('vd-count').textContent = data.articles.length;

  const list = document.getElementById('vd-articles');
  list.innerHTML = data.articles.map((a, i) => `
    <div class="veille-article-row animate-in-delay-${i + 1}">
      <div class="var-num">0${i + 1}</div>
      <div class="var-content">
        <div class="var-meta">
          <span class="var-date">${a.date[lang]}</span>
          <span class="var-source">${a.source}</span>
        </div>
        <div class="var-title">${a.title[lang]}</div>
        <div class="var-excerpt">${a.excerpt[lang]}</div>
        <div class="var-tags">${a.tags.map(t => `<span class="var-tag">${t}</span>`).join('')}</div>
      </div>
    </div>
  `).join('');
}
