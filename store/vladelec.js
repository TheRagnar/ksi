
export const state = () => ({
	params: {
		direction: 'asc',   /// тип сортировки  asc или desc
		column: 'sort_order',  /// поле сортировки
		limit: 9,
		offset: 0,
		total: 0,
		filter_region:  null
	},
	list: {
		fetching: false,
		data: []
	}
});

export const mutations = {
	updateListData(state, actions) {
		state.list.data = actions;
	},
	updateParamsOffset(state, actions) {
		state.params.offset = actions;
	},
	updateParamsLimit(state, actions) {
		state.params.limit = actions;
	},
	updateParamsColumn(state, actions) {
		state.params.column = actions;
	},
	updateParamsDirection(state, actions) {
		state.params.direction = actions;
	},
	updateParamsTotal(state, actions) {
		state.params.total = actions;
	},
	updateParamsFilter(state, actions) {
		state.params.filter_region = actions;
	}
}

export const getters = {

};

export const actions = {
	fetchVladelec({ commit, dispatch, rootState, state }, params = {}) {
		return this.$axios.$get(`${rootState.lang.current}/owners`, { params: state.params})
			.then(response => {
				commit('updateListData', response.data);
				commit('updateParamsTotal', response.meta.total)
				commit('updateParamsOffset', response.meta.offset)
			})
			.catch(error => {
				dispatch('errors/add', {code: "Ошибка", show: true, message: "Ошибка при запросе owners: this.$axios.$get(`/owners`)"}, {root:true})
			})
	},
	chageOffset({ commit, dispatch }, offset)  {
		commit('updateParamsOffset', offset)
	},
	changeFilter({ commit }, region) {
		commit('updateParamsFilter', region)
	},
}