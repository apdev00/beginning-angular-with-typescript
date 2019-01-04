export class ProductService {
  getProducts() {
    return [
      {
        imageUrl: "http://loremflickr.com/150/150?random=1",
        productName: "Product 1",
        releasedDate: new Date(2016, 5, 31),
        description: "Cras sit amet nibh libero, in gravida...",
        rating: 4,
        numOfReviews: 2
      },
      {
        imageUrl: "http://loremflickr.com/150/150?random=2",
        productName: "Product 2",
        releasedDate: new Date(2016, 10, 31),
        description: "Cras sit amet nibh libero, in gravida...",
        rating: 2,
        numOfReviews: 12
      },
      {
        imageUrl: "http://loremflickr.com/150/150?random=3",
        productName: "Product 3",
        releasedDate: new Date(2016, 12, 31),
        description: "Cras sit amet nibh libero, in gravida...",
        rating: 5,
        numOfReviews: 9
      }
    ];
  }
}
