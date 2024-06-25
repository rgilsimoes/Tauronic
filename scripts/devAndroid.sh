# Adjust paths for Android development
export ANDROID_HOME=/Users/ricar/Library/Android/sdk
export PATH=$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH
export NDK_HOME=/Users/ricar/Library/Android/sdk/ndk/27.0.11902837/
export PATH="$PATH:$NDK_HOME"

# Adjust device Id
pnpm tauri android dev Pixel_6_API_32