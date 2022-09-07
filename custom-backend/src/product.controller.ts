import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('product')
export class ProductController {
  public DUMMY_PRODUCT = [];
  @Get()
  async getProduct() {
    return this.DUMMY_PRODUCT;
  }
}
