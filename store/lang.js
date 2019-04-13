export const state = () => ({
	current: 'ru',
	langList: {
		fetching: false,
		data: []
	},
	constants: {
		fetching: false,
		data: {}
	}
});

export const mutations = {
	updateLangListFetchig(state, action) {
		state.langList.fetching = action;
	},
	updateLanglistData(state, action) {
		state.langList.data = action;
	},
	changeLang(state, action) {
		state.current = action;
		if (process.browser){
			state.current = localStorage.getItem('lang');
			localStorage.setItem('lang', action);
			location.reload();
		}
	},
	initLang(state) {
		if (process.browser){
			if(localStorage.getItem('lang')) {
				state.current = localStorage.getItem('lang');
			}
		}
	},
	updateConstantsFetchig(state, action) {
		state.constants.fetching = action;
	},
	updateConstantsData(state, action) {
		state.constants.data = action;
	}
};

export const getters = {
};

export const actions = {
	fetchList({ commit, dispatch }) {
		commit('updateLangListFetchig', true);
		commit('updateLanglistData', []);
		return this.$axios.$get(`languages`)
			.then(response => {
				commit('updateLanglistData', response.data);
				commit('updateLangListFetchig', false)
			})
			.catch(error => {
				dispatch('errors/add', {code: "Ошибка", show: true, message: "Ошибка при запросе языков: this.$axios.$get(`/languages`)"}, {root:true})
				commit('updateLangListFetchig', false)
			})
	},
	changeCurrent({ commit }, lang) {
		commit('changeLang', lang)
	},
	fetchConstants( {commit, dispatch, rootState }) {
		commit('updateConstantsFetchig', true);
		return this.$axios.$get(`${rootState.lang.current}/phrases`)
			.then(response => {
				let constants = {};
				response.data.forEach(element => {
					constants[element.key] = element.t_value;
				});
				commit('updateConstantsData', constants);
				commit('updateConstantsFetchig', false);
			})
			.catch(error => {
				dispatch('errors/add', {code: "Ошибка", show: true, message: "Ошибка при запросе языковых констант: this.$axios.$get(`/phrases`)"}, {root:true})
				commit('updateConstantsFetchig', false)
			})
	}
}