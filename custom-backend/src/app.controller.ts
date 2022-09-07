import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

interface Meal {
  id: string;
  name: string;
  description: string;
  price: number;
}

interface Task {
  id: string;
  text: string;
}

interface Quote {
  id?: string;
  author: string;
  text: string;
}

interface Comment {
  id: string;
  text: string;
}
const meals: Meal[] = [];
const tasks: Task[] = [];
const quotes: Quote[] = [
  // { id: 'q1', author: 'Max', text: 'Learning React is fun!' },
  // { id: 'q2', author: 'Max1', text: 'Learning React is great!' },
];

const comments = {};

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/meal')
  getMeal(): Meal[] {
    return meals;
  }
  @Post('/meal')
  createMeal(@Body() meal: Meal): void {
    console.log(meal);
    meals.push(meal);
  }
  @Get('/tasks')
  getTasks() {
    console.log('get tasks');
    return tasks;
  }
  @Post('/tasks')
  createTasks(@Body() body: { text: string }) {
    const newTesk = {
      text: body.text,
      id: new Date().toISOString(),
    };
    console.log(newTesk);
    tasks.push(newTesk);
    return newTesk;
  }

  @Get('/quotes')
  getQuotes() {
    return quotes;
  }

  @Get('/quotes/:id')
  getQuoteWithId(@Param('id') id: string) {
    const quote = quotes.find((quote) => quote.id === id);
    if (!quote) {
      throw new NotFoundException();
    }
    return quote;
  }

  @Post('/quotes')
  createQuote(@Body() newQuote: Quote) {
    newQuote.id = new Date().toISOString();
    quotes.push(newQuote);
    return newQuote;
  }

  @Get('/comments/:quoteId')
  getComments(@Param('quoteId') quoteId: string) {
    return comments[quoteId] ? comments[quoteId] : [];
  }

  @Post('/comments/:quoteId')
  createComment(@Param('quoteId') quoteId: string, @Body() comment: Comment) {
    const prevComments = comments[quoteId];
    comment.id = new Date().toISOString();
    if (!prevComments) {
      comments[quoteId] = [comment];
    } else {
      comments[quoteId].push(comment);
    }
    return comment;
  }
}
