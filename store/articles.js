
export const state = () => ({
	params: {
		direction: 'asc',   /// тип сортировки  asc или desc
		column: 'sort_order',  /// поле сортировки
		limit: 9,
		offset: 0,
		total: 0
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
	}
}

export const getters = {

};

export const actions = {
	fetchArticles({ commit, dispatch, rootState, state }, params = {}) {
		commit('updateListFetching', true);
		return this.$axios.$get(`${rootState.lang.current}/articles`, { params: state.params})
			.then(response => {
				commit('updateListData', response.data);
				commit('updateParamsTotal', response.meta.total)
				commit('updateParamsOffset', response.meta.offset)
				commit('updateListFetching', false);
			})
			.catch(error => {
				dispatch('errors/add', {code: "Ошибка", show: true, message: "Ошибка при запросе новостей: this.$axios.$get(`/articles`)"}, {root:true})
				commit('updateListFetching', false)
			})
	},
	chageOffset({ commit, dispatch }, offset)  {
		commit('updateParamsOffset', offset)
	}
}