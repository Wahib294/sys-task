"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateBugreportDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_bugreport_dto_1 = require("./create-bugreport.dto");
class UpdateBugreportDto extends (0, mapped_types_1.PartialType)(create_bugreport_dto_1.CreateBugreportDto) {
}
exports.UpdateBugreportDto = UpdateBugreportDto;
//# sourceMappingURL=update-bugreport.dto.js.map