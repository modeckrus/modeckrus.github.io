'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/fonts/RobotoMono-SemiBold.ttf": "2a12618b6d46fd798157e4b9d29cdf06",
"assets/fonts/Lora-BoldItalic.ttf": "1ad2aded60e9b2fa80315e8aab0e0a5d",
"assets/fonts/RobotoMono-Thin.ttf": "7cb58857d294ac1e09b72ea9403c690a",
"assets/fonts/SansForgetica-Regular.otf": "0399ab68d1cff36025b56efacadd8790",
"assets/fonts/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/fonts/Jura-SemiBold.ttf": "42ae8255078dae152acde18230facf5b",
"assets/fonts/Lora-Regular.ttf": "c684a3de5c014a61d5139d5b97da99fc",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/fonts/RobotoMono-Bold.ttf": "e72fdf1cca2cebcbe91325bbe9f9e5da",
"assets/fonts/RobotoMono-Light.ttf": "fa8ab495d494eccb28f4431f054ddbd4",
"assets/fonts/RobotoMono-Regular.ttf": "e5ca8c0ac474df46fe45840707a0c483",
"assets/fonts/Raleway-BlackItalic.ttf": "82163a0f87990e4f9d9ec2b7893e796a",
"assets/fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/fonts/Raleway-ExtraLightItalic.ttf": "005cfa6da2e318c6e260b9a4118f4be4",
"assets/fonts/Raleway-Light.ttf": "6c084270ccdeb72fd9f5a5144cea628f",
"assets/fonts/Oswald-Light.ttf": "4be970a1b24aa834afff4b16842c8981",
"assets/fonts/RobotoMono-ExtraLightItalic.ttf": "2186a1bc18fe3a5b9d35b1f0a9661f97",
"assets/fonts/Raleway-Black.ttf": "38b405eba92acbb5aef45d8152f2a736",
"assets/fonts/Oswald-SemiBold.ttf": "c8ff3929086488642de6b260f5c14e5b",
"assets/fonts/Raleway-Medium.ttf": "2ec8557460d3a2cd7340b16ac84fce32",
"assets/fonts/Oswald-Regular.ttf": "e1996192b98a516646ff9a8c0c0ca90c",
"assets/fonts/Raleway-ThinItalic.ttf": "8fe060be26aca99ed4c879d41c3a8b6d",
"assets/fonts/RobotoMono-Medium.ttf": "8ad82b1dc550319993a7d6c932b2656d",
"assets/fonts/chrysanthi.ttf": "03f5f9f3201836df16184b0bc85ce07e",
"assets/fonts/Raleway-MediumItalic.ttf": "a55ff2cd6e2cffc65817240e14da6813",
"assets/fonts/Lora-SemiBold.ttf": "6c384a752b937ec93378fe87c2494234",
"assets/fonts/Raleway-ExtraLight.ttf": "3d22c4cbf0bbf560dbc16342b6bdccd4",
"assets/fonts/RobotoMono-SemiBoldItalic.ttf": "e0781b003f2cd1145518cc5f5f8d134c",
"assets/fonts/Raleway-BoldItalic.ttf": "2c6f0ac361f6a86d7e8d74f3d6737380",
"assets/fonts/Jura-Medium.ttf": "ef9b2eff47c84477a41de530e3131e25",
"assets/fonts/Oswald-Bold.ttf": "e991dea9f65ce799dd72095ab7ad6e88",
"assets/fonts/RobotoMono-ExtraLight.ttf": "9bab8fe7af63fb4a1d536f0690799953",
"assets/fonts/cupola.ttf": "b8af77e59de72272d9a24de9b1c90b27",
"assets/fonts/Oswald-ExtraLight.ttf": "309040b6e57cb05a6863228a4d395521",
"assets/fonts/Raleway-SemiBoldItalic.ttf": "2ed1e9696712eac2b9ec02ada1045fcb",
"assets/fonts/Jura-Light.ttf": "99632f494cefbacc28feffd1b8a806b5",
"assets/fonts/Lora-Bold.ttf": "eec9b1b134bfc16624d240b70db7ed59",
"assets/fonts/Lora-MediumItalic.ttf": "f281d9bb9a974ed59f13104278dd1868",
"assets/fonts/Raleway-ExtraBoldItalic.ttf": "db1ef2f98145c0429dbc90c817a3cfdf",
"assets/fonts/Jura-Bold.ttf": "6f2bfd2dd20a56fa1bc39da4d8c615fe",
"assets/fonts/RobotoMono-BoldItalic.ttf": "9f19015ac5913e03cdd542eb73d17d12",
"assets/fonts/RobotoMono-LightItalic.ttf": "060d28a8c0576728842455c0a92641e0",
"assets/fonts/Raleway-SemiBold.ttf": "8a192102b50118c45033e53ce897f103",
"assets/fonts/Lora-Italic.ttf": "ab2098e1bf41df6b514fdf1f3d4f30b0",
"assets/fonts/Lora-Medium.ttf": "c3e2f11036e070e9ea5a4cc2c1169165",
"assets/fonts/Raleway-LightItalic.ttf": "78efd1da53f2af86712d955dd36af0a7",
"assets/fonts/Raleway-Italic.ttf": "f73026bcd64e5a5265ab616e5083cd48",
"assets/fonts/RobotoMono-MediumItalic.ttf": "50fcbc561a338706746be330f2b7ef99",
"assets/fonts/RobotoMono-Italic.ttf": "4e76966e85cfc4edb3db058576edcb1b",
"assets/fonts/Raleway-Thin.ttf": "07ac22f3d71e66a0799703116b533ac5",
"assets/fonts/Oswald-Medium.ttf": "351c498bd487b476454b8f09a34139a9",
"assets/fonts/Raleway-ExtraBold.ttf": "c9503ab0f939e9d37fcfb59b25acf8b3",
"assets/fonts/RobotoMono-ThinItalic.ttf": "95e08d0c587d02c33914026841dd5e89",
"assets/fonts/Lora-SemiBoldItalic.ttf": "c4d0098ab3fd2e0968cb946a99c92071",
"assets/fonts/Jura-Regular.ttf": "f9955609f31e2896e60a338d0d0c39a9",
"assets/NOTICES": "bc327787ba02851063baf0e6d67040bc",
"assets/AssetManifest.json": "73a51f06cfb61ff2e1a1782c18424c13",
"assets/packages/qlzb/fonts/RobotoMono-SemiBold.ttf": "2a12618b6d46fd798157e4b9d29cdf06",
"assets/packages/qlzb/fonts/InconsolataCondensed-Regular.ttf": "b12b412ca907b7a30c2bb62e455513e0",
"assets/packages/qlzb/fonts/InconsolataSemiCondensed-Medium.ttf": "15903646d3b21907770624df1bfb8c62",
"assets/packages/qlzb/fonts/Lora-BoldItalic.ttf": "1ad2aded60e9b2fa80315e8aab0e0a5d",
"assets/packages/qlzb/fonts/InconsolataCondensed-ExtraBold.ttf": "5018148a659199c27616fe4a46786aa4",
"assets/packages/qlzb/fonts/InconsolataCondensed-Bold.ttf": "924ef52eca9ed00567166bdf96d1d643",
"assets/packages/qlzb/fonts/RobotoMono-Thin.ttf": "7cb58857d294ac1e09b72ea9403c690a",
"assets/packages/qlzb/fonts/SansForgetica-Regular.otf": "0399ab68d1cff36025b56efacadd8790",
"assets/packages/qlzb/fonts/Raleway-Regular.ttf": "75b4247fdd3b97d0e3b8e07b115673c2",
"assets/packages/qlzb/fonts/Jura-SemiBold.ttf": "42ae8255078dae152acde18230facf5b",
"assets/packages/qlzb/fonts/InconsolataCondensed-ExtraLight.ttf": "adaa6cb2772648ea67d5cd1129c8d778",
"assets/packages/qlzb/fonts/Lora-Regular.ttf": "c684a3de5c014a61d5139d5b97da99fc",
"assets/packages/qlzb/fonts/InconsolataSemiCondensed-Bold.ttf": "7fd3530dff58a8532ad2bc69e048d26a",
"assets/packages/qlzb/fonts/InconsolataExpanded-Bold.ttf": "4d19af2606dac1de2557bd6f472bdc34",
"assets/packages/qlzb/fonts/InconsolataExpanded-Regular.ttf": "e0a91c077a8749bb1b4a4f0f0f3bfc2c",
"assets/packages/qlzb/fonts/RobotoMono-Bold.ttf": "e72fdf1cca2cebcbe91325bbe9f9e5da",
"assets/packages/qlzb/fonts/Inconsolata-Black.ttf": "5effb753d212b5ae351f6342f28268bd",
"assets/packages/qlzb/fonts/RobotoMono-Light.ttf": "fa8ab495d494eccb28f4431f054ddbd4",
"assets/packages/qlzb/fonts/InconsolataUltraCondensed-SemiBold.ttf": "2ca2a971cd862f35cfe62c319f7d005a",
"assets/packages/qlzb/fonts/RobotoMono-Regular.ttf": "e5ca8c0ac474df46fe45840707a0c483",
"assets/packages/qlzb/fonts/InconsolataExtraCondensed-Light.ttf": "9ed46e15b67cf01b3f4cde90e7fb9dd3",
"assets/packages/qlzb/fonts/Raleway-BlackItalic.ttf": "82163a0f87990e4f9d9ec2b7893e796a",
"assets/packages/qlzb/fonts/InconsolataUltraExpanded-Regular.ttf": "7fded62f7a7e79f0cd522ac9b756f379",
"assets/packages/qlzb/fonts/Raleway-Bold.ttf": "7802d8b27fcb19893ce6b38c0789268e",
"assets/packages/qlzb/fonts/InconsolataSemiExpanded-Light.ttf": "0be6b23198b02edbf227b9779ec7f358",
"assets/packages/qlzb/fonts/InconsolataUltraExpanded-Black.ttf": "d9826960b49b53dc9da3fc5f8e1c3a14",
"assets/packages/qlzb/fonts/InconsolataUltraCondensed-Regular.ttf": "e57e21a9e969dc2e8adea1b9a43ffe7f",
"assets/packages/qlzb/fonts/InconsolataExpanded-Light.ttf": "4db8d9b49d5611eb9d23cf319523b1db",
"assets/packages/qlzb/fonts/Raleway-ExtraLightItalic.ttf": "005cfa6da2e318c6e260b9a4118f4be4",
"assets/packages/qlzb/fonts/Raleway-Light.ttf": "6c084270ccdeb72fd9f5a5144cea628f",
"assets/packages/qlzb/fonts/Oswald-Light.ttf": "4be970a1b24aa834afff4b16842c8981",
"assets/packages/qlzb/fonts/InconsolataUltraCondensed-Bold.ttf": "0ecb08f4443cc15ba9bf2d3aa49bd495",
"assets/packages/qlzb/fonts/RobotoMono-ExtraLightItalic.ttf": "2186a1bc18fe3a5b9d35b1f0a9661f97",
"assets/packages/qlzb/fonts/DancingScript-Regular.ttf": "c4434ab21f7144bbcf88c9a35ae3f075",
"assets/packages/qlzb/fonts/Raleway-Black.ttf": "38b405eba92acbb5aef45d8152f2a736",
"assets/packages/qlzb/fonts/Oswald-SemiBold.ttf": "c8ff3929086488642de6b260f5c14e5b",
"assets/packages/qlzb/fonts/Raleway-Medium.ttf": "2ec8557460d3a2cd7340b16ac84fce32",
"assets/packages/qlzb/fonts/Oswald-Regular.ttf": "e1996192b98a516646ff9a8c0c0ca90c",
"assets/packages/qlzb/fonts/InconsolataExtraCondensed-ExtraLight.ttf": "77cde8be39a1d1768a7bf612440b56db",
"assets/packages/qlzb/fonts/Inconsolata-Bold.ttf": "8459cb29b2f9ce3e91a0c9625c7dbeb8",
"assets/packages/qlzb/fonts/Inconsolata-ExtraBold.ttf": "b52af280458d15bf04ec1299cbb7cff4",
"assets/packages/qlzb/fonts/DancingScript-Bold.ttf": "d45862789a79a733f148e5177ea6953a",
"assets/packages/qlzb/fonts/InconsolataExtraExpanded-Bold.ttf": "c4d8550bfd1aaf353d3fbc7e606ce80e",
"assets/packages/qlzb/fonts/InconsolataExpanded-Black.ttf": "87f5b9a7ab60b849ba012855025d68c8",
"assets/packages/qlzb/fonts/InconsolataExpanded-Medium.ttf": "a2c7b95d8a74403a7257cc7c61f27204",
"assets/packages/qlzb/fonts/Raleway-ThinItalic.ttf": "8fe060be26aca99ed4c879d41c3a8b6d",
"assets/packages/qlzb/fonts/RobotoMono-Medium.ttf": "8ad82b1dc550319993a7d6c932b2656d",
"assets/packages/qlzb/fonts/DancingScript-SemiBold.ttf": "415dfbf4ab2df060fe2d9eade2824767",
"assets/packages/qlzb/fonts/InconsolataUltraCondensed-ExtraBold.ttf": "7951418f77718b840ce5f118a7d3bf28",
"assets/packages/qlzb/fonts/InconsolataExtraCondensed-ExtraBold.ttf": "6848869ac66ba7d06cab2f7ea10d23c2",
"assets/packages/qlzb/fonts/Raleway-MediumItalic.ttf": "a55ff2cd6e2cffc65817240e14da6813",
"assets/packages/qlzb/fonts/InconsolataSemiExpanded-ExtraLight.ttf": "ce0dc7e6302a1c451e3ed085ed74c1b6",
"assets/packages/qlzb/fonts/InconsolataCondensed-Black.ttf": "5b5064e23069c4439b591ed192f3befc",
"assets/packages/qlzb/fonts/InconsolataExtraCondensed-Bold.ttf": "ac4ba457a492bc8ef6c7a7bddfca7a27",
"assets/packages/qlzb/fonts/Lora-SemiBold.ttf": "6c384a752b937ec93378fe87c2494234",
"assets/packages/qlzb/fonts/InconsolataUltraExpanded-SemiBold.ttf": "999b33e888995e7b8fa0420341e236e5",
"assets/packages/qlzb/fonts/InconsolataUltraCondensed-ExtraLight.ttf": "50d61a3be736b0ea1478fd02495d6206",
"assets/packages/qlzb/fonts/Inconsolata-ExtraLight.ttf": "cd2fcf180a3715be9cc78ecbe151eb53",
"assets/packages/qlzb/fonts/Raleway-ExtraLight.ttf": "3d22c4cbf0bbf560dbc16342b6bdccd4",
"assets/packages/qlzb/fonts/InconsolataExpanded-SemiBold.ttf": "87907201c14d1d2f94f3cb1f435158b2",
"assets/packages/qlzb/fonts/RobotoMono-SemiBoldItalic.ttf": "e0781b003f2cd1145518cc5f5f8d134c",
"assets/packages/qlzb/fonts/Raleway-BoldItalic.ttf": "2c6f0ac361f6a86d7e8d74f3d6737380",
"assets/packages/qlzb/fonts/Jura-Medium.ttf": "ef9b2eff47c84477a41de530e3131e25",
"assets/packages/qlzb/fonts/Oswald-Bold.ttf": "e991dea9f65ce799dd72095ab7ad6e88",
"assets/packages/qlzb/fonts/RobotoMono-ExtraLight.ttf": "9bab8fe7af63fb4a1d536f0690799953",
"assets/packages/qlzb/fonts/Oswald-ExtraLight.ttf": "309040b6e57cb05a6863228a4d395521",
"assets/packages/qlzb/fonts/Raleway-SemiBoldItalic.ttf": "2ed1e9696712eac2b9ec02ada1045fcb",
"assets/packages/qlzb/fonts/InconsolataExpanded-ExtraLight.ttf": "c03aa34f81ca22bb72deaf8e0c887dfa",
"assets/packages/qlzb/fonts/InconsolataCondensed-Medium.ttf": "dc84f46a8f8ed6801c111eff957c9f1b",
"assets/packages/qlzb/fonts/Jura-Light.ttf": "99632f494cefbacc28feffd1b8a806b5",
"assets/packages/qlzb/fonts/InconsolataSemiCondensed-SemiBold.ttf": "71aaca6eaaf20385925f6c33ffeef5ca",
"assets/packages/qlzb/fonts/InconsolataCondensed-SemiBold.ttf": "460f9ca9cd0bd7c7102bb50b6d4820e3",
"assets/packages/qlzb/fonts/InconsolataExtraExpanded-Regular.ttf": "800aefa7e63598426dfe33a304af824f",
"assets/packages/qlzb/fonts/InconsolataExtraCondensed-Regular.ttf": "a5e0eaaf76823024e86b4e448ea11799",
"assets/packages/qlzb/fonts/InconsolataExtraExpanded-ExtraBold.ttf": "333dd4ef4d34dc2d3b4575d7c69ad6b2",
"assets/packages/qlzb/fonts/InconsolataExtraCondensed-Black.ttf": "720c1a6a50e8ca00af4555e1ec9fbe4f",
"assets/packages/qlzb/fonts/Lora-Bold.ttf": "eec9b1b134bfc16624d240b70db7ed59",
"assets/packages/qlzb/fonts/Lora-MediumItalic.ttf": "f281d9bb9a974ed59f13104278dd1868",
"assets/packages/qlzb/fonts/InconsolataExtraExpanded-Light.ttf": "3edb1146d25dfa298201c3eaae9f520d",
"assets/packages/qlzb/fonts/InconsolataUltraCondensed-Black.ttf": "b4708eef29c3de21eddd8b6401a4be30",
"assets/packages/qlzb/fonts/InconsolataExtraCondensed-Medium.ttf": "40651264e0ab74d0251feab97380ff43",
"assets/packages/qlzb/fonts/InconsolataSemiCondensed-Black.ttf": "27f9288f9143f70f7e7225f777c60f6a",
"assets/packages/qlzb/fonts/InconsolataUltraExpanded-Bold.ttf": "42708e9d31b4f5e12fc0d3bb35c7324e",
"assets/packages/qlzb/fonts/Raleway-ExtraBoldItalic.ttf": "db1ef2f98145c0429dbc90c817a3cfdf",
"assets/packages/qlzb/fonts/InconsolataSemiExpanded-SemiBold.ttf": "fef94be5b7bec91f5b48c97b1285aabe",
"assets/packages/qlzb/fonts/InconsolataUltraCondensed-Light.ttf": "d7ff6191c16ab70b87c7f8866488207a",
"assets/packages/qlzb/fonts/Inconsolata-SemiBold.ttf": "67d275b4059c2e7958f5025b381697b3",
"assets/packages/qlzb/fonts/Jura-Bold.ttf": "6f2bfd2dd20a56fa1bc39da4d8c615fe",
"assets/packages/qlzb/fonts/RobotoMono-BoldItalic.ttf": "9f19015ac5913e03cdd542eb73d17d12",
"assets/packages/qlzb/fonts/InconsolataSemiExpanded-Medium.ttf": "0d2ddb7fdf76c49ad6902300921ce8cd",
"assets/packages/qlzb/fonts/InconsolataSemiCondensed-ExtraLight.ttf": "0e56749124befac661fa7c639cbeda7f",
"assets/packages/qlzb/fonts/RobotoMono-LightItalic.ttf": "060d28a8c0576728842455c0a92641e0",
"assets/packages/qlzb/fonts/Raleway-SemiBold.ttf": "8a192102b50118c45033e53ce897f103",
"assets/packages/qlzb/fonts/DancingScript-Medium.ttf": "2b9b7690ea41eca720fedddff070e153",
"assets/packages/qlzb/fonts/InconsolataSemiCondensed-Light.ttf": "ed0c783a875b103f4fb08617b5e91666",
"assets/packages/qlzb/fonts/Lora-Italic.ttf": "ab2098e1bf41df6b514fdf1f3d4f30b0",
"assets/packages/qlzb/fonts/Lora-Medium.ttf": "c3e2f11036e070e9ea5a4cc2c1169165",
"assets/packages/qlzb/fonts/Inconsolata-Medium.ttf": "fe81130af236d40cfdc40a0eb7ff37ff",
"assets/packages/qlzb/fonts/InconsolataSemiExpanded-Black.ttf": "f36b7d32f53ff7e4c659fc4690516ccb",
"assets/packages/qlzb/fonts/InconsolataCondensed-Light.ttf": "8ea329dae921922b9e5e8990209d8538",
"assets/packages/qlzb/fonts/InconsolataSemiExpanded-ExtraBold.ttf": "4dc3a9e2f3e877479f982ffb5421fd02",
"assets/packages/qlzb/fonts/InconsolataExtraExpanded-ExtraLight.ttf": "adc966264cd706f23264f64da93e3d8e",
"assets/packages/qlzb/fonts/InconsolataUltraExpanded-ExtraLight.ttf": "fc3917836ba170a774255be7de7b55ec",
"assets/packages/qlzb/fonts/Raleway-LightItalic.ttf": "78efd1da53f2af86712d955dd36af0a7",
"assets/packages/qlzb/fonts/InconsolataExtraExpanded-Medium.ttf": "589fb932a96c78381e8c9112009b132f",
"assets/packages/qlzb/fonts/Inconsolata-Regular.ttf": "39cba59a48ffa6eea39a5d5f9ec63df6",
"assets/packages/qlzb/fonts/InconsolataSemiExpanded-Bold.ttf": "1102e57d2d704d4aa44f0869ae187077",
"assets/packages/qlzb/fonts/InconsolataUltraExpanded-ExtraBold.ttf": "3276850f570a282484f9fd8c50fb51ba",
"assets/packages/qlzb/fonts/Raleway-Italic.ttf": "f73026bcd64e5a5265ab616e5083cd48",
"assets/packages/qlzb/fonts/InconsolataExtraExpanded-SemiBold.ttf": "1765a4b490d9a692fabe07744e4b5a66",
"assets/packages/qlzb/fonts/InconsolataSemiCondensed-Regular.ttf": "1f55ba3d6c3890ad2cbd73029f80e632",
"assets/packages/qlzb/fonts/InconsolataUltraExpanded-Light.ttf": "1723977f0823f0b4967621d82d479bd3",
"assets/packages/qlzb/fonts/InconsolataExtraExpanded-Black.ttf": "60c48a85a11853104e4c5cede00de138",
"assets/packages/qlzb/fonts/RobotoMono-MediumItalic.ttf": "50fcbc561a338706746be330f2b7ef99",
"assets/packages/qlzb/fonts/InconsolataUltraExpanded-Medium.ttf": "f4543ce321ff101650bb317f951af936",
"assets/packages/qlzb/fonts/Inconsolata-Light.ttf": "c8b568b1f3bf08c879495fe8fc1dea30",
"assets/packages/qlzb/fonts/InconsolataExpanded-ExtraBold.ttf": "b0b2ecba6bed79642b71c5f92847eec1",
"assets/packages/qlzb/fonts/RobotoMono-Italic.ttf": "4e76966e85cfc4edb3db058576edcb1b",
"assets/packages/qlzb/fonts/InconsolataExtraCondensed-SemiBold.ttf": "c70d1a6345ea82fc366183392a744901",
"assets/packages/qlzb/fonts/Raleway-Thin.ttf": "07ac22f3d71e66a0799703116b533ac5",
"assets/packages/qlzb/fonts/Oswald-Medium.ttf": "351c498bd487b476454b8f09a34139a9",
"assets/packages/qlzb/fonts/Raleway-ExtraBold.ttf": "c9503ab0f939e9d37fcfb59b25acf8b3",
"assets/packages/qlzb/fonts/RobotoMono-ThinItalic.ttf": "95e08d0c587d02c33914026841dd5e89",
"assets/packages/qlzb/fonts/InconsolataSemiExpanded-Regular.ttf": "fc9346fafc6ed99e9fb934089f3642a8",
"assets/packages/qlzb/fonts/Lora-SemiBoldItalic.ttf": "c4d0098ab3fd2e0968cb946a99c92071",
"assets/packages/qlzb/fonts/InconsolataSemiCondensed-ExtraBold.ttf": "1eecb52c6120d0620f7396a45ae5e851",
"assets/packages/qlzb/fonts/InconsolataUltraCondensed-Medium.ttf": "09cc00a304e55f366880276cecc38c25",
"assets/packages/qlzb/fonts/Jura-Regular.ttf": "f9955609f31e2896e60a338d0d0c39a9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/resources/langs/en.yaml": "cfef061316b45b8816c973bbc1efaef9",
"assets/resources/langs/langs.yaml": "d41d8cd98f00b204e9800998ecf8427e",
"assets/resources/langs/ru.yaml": "cf1d13bce5cd15567be2979725e80b8d",
"assets/FontManifest.json": "7fd0e8315a2bbf920156591e756ccbe7",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "e872c92d2210350c713cff06923239d7",
"index.html": "d3b79b58ff241cf0ffd4f2d1baebfd18",
"/": "d3b79b58ff241cf0ffd4f2d1baebfd18",
"manifest.json": "e95aac2278067576186f1487edd80fd3",
"firebase-messaging-sw.js": "b12ebe11984feb53bcfc6ae301445a42"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
