export const state = () => ({
	params: {
		direction: 'asc',   /// тип сортировки  asc или desc
		column: 'sort_order',  /// поле сортировки
		limit: 9,
		offset: 0,
		total: 0,
		filter_region: null,
	},
	list: {
		fetching: false,
		data: []
	}
});

export const mutations = {
	updateListFetching(state, action) {
		state.list.fetching = action;
	},
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
	fetchProjects({ commit, dispatch, rootState, state }, params = {}) {
		commit('updateListFetching', true);
		return this.$axios.$get(`${rootState.lang.current}/projects`, { params: state.params})
			.then(response => {
				commit('updateListData', response.data);
				commit('updateParamsTotal', response.meta.total)
				commit('updateParamsOffset', response.meta.offset)
				commit('updateListFetching', false);
			})
			.catch(error => {
				dispatch('errors/add', {code: "Ошибка", show: true, message: "Ошибка при запросе проектов: this.$axios.$get(`/projects`)"}, {root:true})
				commit('updateListFetching', false)
			})
	},
	changeFilter({ commit }, region) {
		commit('updateParamsFilter', region)
	},
	chageOffset({ commit }, offset)  {
		commit('updateParamsOffset', offset)
	}
}