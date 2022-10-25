import { IsNotEmpty, IsString } from 'class-validator';

export class createStudentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsString()
  surname: string;
}
