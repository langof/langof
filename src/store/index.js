import Vuex from 'vuex'

const store = () => {
	return new Vuex.Store({
		state: {
			target: {
				icon: '🇺🇸',
				text: 'English',
				code: 'en',
				talk: 'en-US'
			},
			source: {
				icon: '🇰🇷',
				text: 'Korean',
				code: 'ko',
				talk: 'ko-KR'
			},
			languages: [
				{icon: '🇰🇷', text: 'Korean', code: 'ko', talk: 'ko-KR'},
				{icon: '🇺🇸', text: 'English', code: 'en', talk: 'en-US'},
				{icon: '🇯🇵', text: 'Japanese', code: 'ja', talk: 'ja-JP'},
				{icon: '🇨🇳', text: 'Chinese', code: 'zh', talk: 'zh-CN'},
				{icon: '🇪🇸', text: 'Spanish', code: 'es', talk: 'es-ES'},
				{icon: '🇮🇱', text: 'Arabic', code: 'ar', talk: 'ar-IL'},
				{icon: '🇵🇹', text: 'Portuguese', code: 'pt', talk: 'pt-PT'},
				{icon: '🇮🇳', text: 'Hindi', code: 'hi', talk: 'hi-IN'},
				{icon: '🇷🇺', text: 'Russian', code: 'ru', talk: 'ru-RU'},
				{icon: '🇩🇪', text: 'German', code: 'de', talk: 'de-DE'},
				{icon: '🇫🇷', text: 'French', code: 'fr', talk: 'fr-FR'},
			],
			isFinal: false,
			transcripts: [],
			recognition: {}
		},
		getters: {
			getRecognition: state => {
				return state.recognition
			}
		},
		mutations: {
			setLanguage: (state, {status, lang}) => {
				state[status] = lang
				return state[status]
			},
			setSource(state, source) {
				state.source = source
			},
			setTarget(state, target) {
				state.target = target
			},
			addScript(state, script) {
				state.scripts.push(script)
				return state.scripts
			},
			setIsFinal(state, isFinal) {
				state.isFinal = isFinal
				return state.isFinal
			},
			addTranscript(state, transcript) {
				state.transcripts.push(transcript)
				return state.transcripts
			},
			clearTranscript: state => {
				state.transcripts = []
				return state.transcripts
			},
			setRecognition(state, recognition) {
				state.recognition = recognition
				return state.recognition
			},
			setRecognitionLang(state, language) {
				state.recognition.lang = language
				return state.recognition
			}
		}
	})
}

export default store
