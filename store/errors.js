
export const state = () => ({
	list: []
});

export const mutations = {
	add(state, action) {
		action.id = state.list.length+1
		state.list.push(action);
	},
	remove(state, action) {
		state.list = state.list.filter(elem => elem.id !== action);
	}
};

export const getters = {
	
};

export const actions = {
	add({ commit }, params = {}) {
		commit('add', params);
	},
	remove({ commit }, id) {
		commit('remove', id)
	}
}