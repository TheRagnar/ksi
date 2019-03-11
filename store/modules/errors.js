export const state = () => ({
	count: 0,
	list: []
});

export const mutations = {
	add(state, error) {
		state.count++;
		state.list.push({
			id: state.count,
			code: error.code,
			message: error.message,
			show: true
		});
	},
	remove(state, id) {
		state.list = state.list.filter( error => error.id !== id);
	},
};

export const getters = {
	getList(state) {
		return state.list;
	},
	getCount(state) {
		return state.count;
	}
};

export const actions = {
	addError({commit}, error){
		commit('add', error);
	},
	removeError({commit}, id) {
		commit('remove', id);
	}
}