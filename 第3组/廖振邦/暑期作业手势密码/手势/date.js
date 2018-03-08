//类构造函数,处理密码的读取以及储存
function Date() { };
Date.prototype = {
    savePwd: function (pwd) {
        if (pwd.length < 5) {
            return false;
        }
        else {
            localStorage.removeItem("password");
            localStorage.setItem("password", pwd.join(""));
            return true;
        }
    },
    readPwd:function(){
      return localStorage.getItem("password");
    },
    //去除绘制路线时重复的元素,返回无重复数组
    removeRepeat:function(arr){
        let len = arr.length;
		let ret = [];
		if(len !== 0) {
			if(typeof(arr[0]) !== "object") {
				for(let i = 0; i < len; i++) {
					if(ret.indexOf(arr[i]) === -1) {
						ret.push(arr[i]);
					}
				}
			} else {
				ret[0] = arr[0];
				for(let j = 0; j < len; j++) {
					if(this.isContainObj(arr[j], ret)) {
						continue;
					} else {
						ret.push(arr[j]);
					}
				}
			}
        }
       
		return ret;
    },
    //判断对象是否在对象数组中
    isContainObj(obj, objArr) {
		for(let i = 0; i < objArr.length; i++) {
			if(this.isEqualObj(obj, objArr[i])) {
				return true;
			}
		}
		return false;
	},
	/**
	 * 比较两个对象是否相等（属性名与属性值皆相同）
	 * @method isEqualObj
	 * @for Data
	 * @param {Object,Object} obj1, obj2：要比较的两个对象
	 * @return {Boolean} 相等：true，不相等：false
	 */
	isEqualObj(obj1, obj2) {
		let obj1Props = Object.getOwnPropertyNames(obj1);
		let obj2Props = Object.getOwnPropertyNames(obj2);
		if(obj1Props.length !== obj2Props.length) {
			return false;
		}
		for(let i = 0; i < obj1Props.length; i++) {
			let propName = obj1Props[i];
			if(obj1[propName] !== obj2[propName]) {
				return false;
			}
		}
		return true;
	}
}
