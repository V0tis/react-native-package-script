# utaha-package-script-react-native

Splash or App Icon ->  yarn add -D @bam.tech/react-native-make 설치 후 진행

Project Rename -> yarn global add react-native-rename 설치 후 진행



```c

{ 
    "makeSplash": "react-native set-splash --path src/assets/images/splash.png --resize cover",
    "ios:device": "react-native run-ios --device '정동건의 iPhone Xs Max'",
    "ios:install": "yarn && cd ios && pod install",
    "remove": "rm -rf node_modules && cd ios && rm -rf Pods && rm -rf build && rm -rf Podfile.lock && cd .. && yarn run re_install",
    "ios:se": "react-native run-ios --simulator='iPhone SE'",
    "ios:8": "react-native run-ios --simulator='iPhone 8'",
    "makeAppIcon": "react-native set-icon --path [path-to-image] --background [\"color\"]",
    "projectRename": "react-native-rename <newName>",
    "android:debug": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && cd android/ && ./gradlew assembleDebug && open app/build/outputs/apk/",
    "android:bundle": "react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res",
    "android:release": "yarn run android:bundle && rm -rf android/app/src/main/res/drawable-* && rm -rf android/app/src/main/res/raw/* && yarn run makeSplash && cd android && ./gradlew clean && ./gradlew assembleRelease && cd ..",
    "podInstall": "cd ios && pod install && cd ..",
    "clean": "watchman watch-del-all && rm -rf node_modules/ && yarn cache clean && yarn install && yarn start -- --reset-cache"

}

```
