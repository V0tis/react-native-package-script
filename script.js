
{ 
    "makeSplash": "react-native set-splash --path src/assets/images/splash.png --resize cover",
    "device": "react-native run-ios --device '정동건의 iPhone Xs Max'",
    "re_install": "yarn && cd ios && pod install && yarn run iphone_se_start",
    "remove": "rm -rf node_modules && cd ios && rm -rf Pods && rm -rf build && rm -rf Podfile.lock && cd .. && yarn run re_install",
    "iphone_se_start": "react-native run-ios --simulator='iPhone SE'",
    "make_app_icon": "react-native set-icon --path [path-to-image] --background [\"color\"]",
    "make_splash": "react-native set-splash --path [path-to-image] --resize [contain|cover|center] --background [\"background-color\"]",
    "project_rename": "react-native-rename <newName>"
}
