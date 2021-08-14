interface ProductInfoModel {
  show: boolean | undefined;
  type: string | undefined;
  backgroundImg: string | undefined;
  buttonText: string | undefined;
  link: string | undefined;
  productId: string | undefined;
  productImg: string | undefined;
  productName: string | undefined;
  productDescription: string | undefined;
}

export interface Banner {
  product: ProductInfoModel;
}
