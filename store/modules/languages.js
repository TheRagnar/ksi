export const state = () => ({
	current: 'ru',
	list: [],
	constants: []
});

export const mutations = {
	setList(state, lists) {
		state.list = [];
		lists.forEach(element => {
			state.list.push({name:element.title,val:element.locale})	
		});
	},
	setConst(state, constants) {
	}
};

export const getters = {
	getList(state) {
		return state.list;
	},
	getCurrent(state) {
		return state.current;
	},
};

export const actions = {
	loadLangs({commit}){
		return this.$axios.get('/languages').then((response) => {
				commit('setList', response.data.languages);
			}).catch((error) => {
				console.log(error)
			})
	},
	loadConst({commit}){
		// return this.$axios.get(`${this.getters['modules/errors/getCurrent']}/languages`).then((response) => {
		// 	commit('setConst', response.data.statuses);
		// 	// commit('constants', response.data);
		// }).catch((error) => {
		// 	console.log(error)
		// })
	}
}