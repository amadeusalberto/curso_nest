import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Product extends Document {
  @Prop({ required: true, unique: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ type: Number })
  price: number;

  @Prop({ type: Number, index: true })
  stock: number;

  @Prop()
  image: string;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
