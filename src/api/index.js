import fly from "../utils/request.js"

export const getEvaTemplate = (params) => {
	return fly.get('/api/evaluation/templete/preview',params)
}