export default {
  state: () => ({
    video: {
      src: null,
      fps: 10,
    },
    secondPerKeyframe: 5,
    keyframeList: {},
    leftPanel: {
      currentKeyframe: 0,
    },
    rightPanel: {
      currentKeyframe: 50,
    },
    cachedFrameList: [],
    mode: 'objects',
    lockSliders: false,
    grayscale: false,
  }),
  getters: {},
  mutations: {
    setVideoSrc (state, value) {
      if (!value) {
        Vue.set(state.video, 'fps', 10)
        Vue.set(state, 'secondPerKeyframe', 5)
        Vue.set(state, 'keyframeList', {})
        Vue.set(state, 'leftPanel', {
          currentKeyframe: 0,
        })
        Vue.set(state, 'rightPanel', {
          currentKeyframe: 50,
        })
        Vue.set(state, 'mode', 'objects')
        Vue.set(state, 'lockSliders', false)
        Vue.set(state, 'grayscale', false)
      }
      Vue.set(state.video, 'src', value)
    },
    setVideoDuration (state, value) {
      Vue.set(state.video, 'duration', value)
    },
    setVideoWidth (state, value) {
      Vue.set(state.video, 'width', value)
    },
    setVideoHeight (state, value) {
      Vue.set(state.video, 'height', value)
    },
    setVideoFPS (state, value) {
      Vue.set(state.video, 'fps', value)
      Vue.set(state, 'rightPanel', {
        currentKeyframe: value * state.secondPerKeyframe,
      })
    },
    setSecondPerKeyframe (state, value) {
      Vue.set(state, 'secondPerKeyframe', value)
      let keyframeList = []
      for (let keyframe = 0; keyframe < state.video.duration; keyframe += value) {
        keyframeList.push(keyframe * state.video.fps)
      }
      Vue.set(state, 'keyframeList', keyframeList)
      Vue.set(state.leftPanel, 'currentKeyframe', 0)
      Vue.set(state.rightPanel, 'currentKeyframe', value * state.video.fps)
    },
    setLeftPanelCurrentKeyframe (state, value) {
      Vue.set(state.leftPanel, 'currentKeyframe', value)
    },
    setRightPanelCurrentKeyframe (state, value) {
      Vue.set(state.rightPanel, 'currentKeyframe', value)
    },
    setMode (state, value) {
      Vue.set(state, 'mode', value)
    },
    setLockSliders (state, value) {
      Vue.set(state, 'lockSliders', value)
    },
    setGrayscale (state, value) {
      Vue.set(state, 'grayscale', value)
    },
    cacheFrame (state, value) {
      Vue.set(state.cachedFrameList, value['index'], value['frame'])
    },
  },
  actions: {},
}
