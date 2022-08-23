export interface IProducts {
  id: number;
  title: string;
  price: number;
  inventory: number; //库存
}

const _products: IProducts[] = [
  { id: 1, title: "牛仔裤", price: 122, inventory: 2 },
  { id: 2, title: "卫衣", price: 222, inventory: 5 },
  { id: 3, title: "运动鞋", price: 322, inventory: 6 },
];
// wait，封装了promise的定时器
export const getProducts = async () => {
  await wait(100);
  // 模拟接收数据的请求
  return _products;
};

export const buyProducts = async () => {
  await wait(100);
  // 模拟结算后发送请求
  return Math.random() > 0.5;
};
async function wait(delay: number) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, delay);
  });
}
