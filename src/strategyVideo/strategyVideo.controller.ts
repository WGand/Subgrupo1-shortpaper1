import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { strategyVideoDto } from './strategyVideo.dto';
import { strategyVideo } from './strategyVideo.entity';
import { StrategyVideoService } from './strategyVideo.service';

@Controller('strategyVideo')
export class StrategyVideoController {
  constructor(private strategyVideoService: StrategyVideoService) {}

  @Get(':strategyVideoId')
  findStrategyVideo(
    @Param('strategyVideoId') strategyVideoId: string,
  ): Promise<strategyVideo> {
    return this.strategyVideoService.findStrategy(strategyVideoId);
  }

  @Post()
  createStrategyVideo(
    @Body() newStrategyVideo: strategyVideoDto,
  ): Promise<strategyVideo> {
    return this.strategyVideoService.createStrategyService(newStrategyVideo);
  }

  @Put(':strategyVideoId')
  updateStrategyVideo(
    @Param('strategyVideoId') strategyVideoId: string,
    @Body() updateStrategyVideo: strategyVideoDto,
  ): Promise<strategyVideo> {
    return this.strategyVideoService.updateStrategy(
      strategyVideoId,
      updateStrategyVideo,
    );
  }

  @Delete(':strategyVideoId')
  deleteStrategyVideo(
    @Param('strategyVideoId') strategyVideoId: string,
  ): Promise<strategyVideo> {
    return this.strategyVideoService.deleteStrategy(strategyVideoId);
  }
}
