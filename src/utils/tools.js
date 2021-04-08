// 对象转查询字符
export const obj2Query = (object) => {
	return Object.keys(object).map(key => `${key}=${object[key]}`).join('&')
}

// 查询字符串转对象
export const query2Obj = (query) => {
	let strQuery = query,
		idx = strQuery.indexOf('?');
	if (idx !== -1) {
		strQuery = strQuery.slice(idx + 1)
	}

	return strQuery.split('&').reduce(((prev, curr) => {
		let currArr = curr.split('=')
		prev[currArr[0]] = currArr[1]
		return prev
	}), {})
}
