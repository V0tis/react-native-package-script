
{ 
    "makeSplash": "react-native set-splash --path src/assets/images/splash.png --resize cover",
    "device": "react-native run-ios --device '정동건의 iPhone Xs Max'",
    "re_install": "yarn && cd ios && pod install && yarn run iphone_se_start",
    "remove": "rm -rf node_modules && cd ios && rm -rf Pods && rm -rf build && rm -rf Podfile.lock && cd .. && yarn run re_install",
    "iphone_se_start": "react-native run-ios --simulator='iPhone SE'",
    "make_app_icon": "react-native set-icon --path [path-to-image] --background [\"color\"]",
    "make_splash": "react-native set-splash --path [path-to-image] --resize [contain|cover|center] --background [\"background-color\"]",
    "project_rename": "react-native-rename <newName>",
        "android-debug-build": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res/ && cd android && ./gradlew assembleDebug && cd ..",
    "android-release-build": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/build/intermediates/res/merged/release/ && rm -rf android/app/src/main/res/drawable-* && rm -rf android/app/src/main/res/raw/* && cd android && ./gradlew assembleRelease && cd .."
}
