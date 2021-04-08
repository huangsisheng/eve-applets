import fly from "../utils/request.js"

export const userLogin = (params) => {
    return fly.get('',params)
}

export const getEvaTemplate = (params) => {
	return fly.get('/api/evaluation/templete/preview',params)
}
