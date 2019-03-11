export const state = () => ({
	current: 'ru',
	list: []
});

export const mutations = {
	setList(state, lists) {
		state.list = [];
		lists.forEach(element => {
			state.list.push({name:element.title,val:element.locale})	
		});
	},
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
				console.log(error);
				// this.$store.dispatch('modules/errors/addError', {code: 404, message: 'lol kek pek 222'});
			})
	},
}