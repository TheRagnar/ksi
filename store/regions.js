
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
	updateListData(state, action) {
		state.list.data = action;
	}
}

export const actions = {
	fetchRegion({ commit, dispatch, rootState, state }, params = {}) {
		return this.$axios.$get(`${rootState.lang.current}/regions`, { params: state.params})
			.then(response => {
				commit('updateListData', response.data);
			})
			.catch(error => {
				dispatch('errors/add', {code: "Ошибка", show: true, message: "Ошибка при запросе регионов: this.$axios.$get(`/regions`)"}, {root:true})
			})
	}
}