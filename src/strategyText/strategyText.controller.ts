import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { createStudentDto } from 'src/Student/createStudent.dto';

import { strategyTextDto } from './strategyText.dto';
import { strategyText } from './strategyText.entity';
import { StrategyTextService } from './strategyText.service';

@Controller('strategyText')
export class StrategyTextController {
  constructor(private strategyTextService: StrategyTextService) {}

  @Get(':strategyTextId')
  findStrategyText(
    @Param('strategyTextId') strategyTextId: string,
  ): Promise<strategyText> {
    return this.strategyTextService.findStrategyText(strategyTextId);
  }

  @Post()
  createStrategyText(
    @Body() newStrategyText: strategyTextDto,
  ): Promise<strategyText> {
    return this.strategyTextService.createStrategyTextService(newStrategyText);
  }

  @Put(':strategyTextId')
  updateStrategyText(
    @Param('strategyTextId') strategyTextId: string,
    @Body() updateStrategyText: strategyTextDto,
  ): Promise<strategyText> {
    return this.strategyTextService.updateStrategyText(
      strategyTextId,
      updateStrategyText,
    );
  }

  @Delete(':strategyTextId')
  deleteStrategyText(
    @Param('strategyTextId') strategyTextId: string,
  ): Promise<strategyText> {
    return this.strategyTextService.deleteStrategyText(strategyTextId);
  }
}
