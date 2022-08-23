/**
 * mock接口，ts书写
 * 1.定义返回的数据接口类型
 * 2.模拟数据结构内容
 * 3.获得数据内容函数（异步）
 * 4.结算函数
 * 5.封装一个异步的wait定时器
 **/
// 1.

export interface IProduct {
  id: number;
  title: string;
  price: number;
  inventory: number; //库存
}
// 2.
const _products = [
  { id: 1, title: "ipad 4 mini", price: 500.01, inventory: 2 },
  { id: 2, title: "H&M T-shirt white", price: 10, inventory: 5 },
  { id: 3, title: "Charli XCX - Sucker CD", price: 50, inventory: 7 },
];
// 5.
async function wait(delay: number) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
// 3.
export const getProducts = async () => {
  await wait(100);
  return _products;
};
// 4.
export const buyProducts = async () => {
  await wait(100);
  return Math.random() > 1;
};
