# utaha-package-script-react-native

Splash or App Icon ->  yarn add -D @bam.tech/react-native-make 설치 후 진행

Project Rename -> yarn global add react-native-rename 설치 후 진행



```c

{ 
    "makeSplash": "react-native set-splash --path src/assets/images/splash.png --resize cover",
    "device": "react-native run-ios --device '정동건의 iPhone Xs Max'",
    "reInstall": "yarn && cd ios && pod install && yarn run iphone_se_start",
    "remove": "rm -rf node_modules && cd ios && rm -rf Pods && rm -rf build && rm -rf Podfile.lock && cd .. && yarn run re_install",
    "iphoneSeStart": "react-native run-ios --simulator='iPhone SE'",
    "makeAppIcon": "react-native set-icon --path [path-to-image] --background [\"color\"]",
    "projectRename": "react-native-rename <newName>",
    "androidDebugBuild": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && cd android/ && ./gradlew assembleDebug && open app/build/outputs/apk/",
    "makeBundle": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res",
    "androidReleaseBuild": "yarn run make_bundle && rm -rf android/app/src/main/res/drawable-* && rm -rf android/app/src/main/res/raw/* && yarn run makeSplash && cd android && ./gradlew assembleRelease && cd ..",
    "podInstall": "cd ios && pod install && cd ..",
    "clean": "watchman watch-del-all && rm -rf node_modules/ && yarn cache clean && yarn install && yarn start -- --reset-cache"

}

```
