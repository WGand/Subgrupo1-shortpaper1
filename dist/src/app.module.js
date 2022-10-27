"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_service_1 = require("../config/config.service");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const student_module_1 = require("./Student/student.module");
const message_service_1 = require("./Message/message.service");
const message_controller_1 = require("./Message/message.controller");
const strategyText_module_1 = require("./strategyText/strategyText.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            student_module_1.StudentModule,
            typeorm_1.TypeOrmModule.forRoot(config_service_1.typeOrmConfig),
            strategyText_module_1.StrategyImageModule,
        ],
        controllers: [app_controller_1.AppController, message_controller_1.MessageController],
        providers: [app_service_1.AppService, message_service_1.MessageService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map