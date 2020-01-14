export function getCourses() {
    return new Promise(resolve => {
        setTimeout(() => {
            // 初始化courses时，没有price属性
            resolve([{ name: 'web全栈' },
            { name: 'web高级' }]);
        }, 2000);
    });
}