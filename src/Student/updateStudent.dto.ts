import { IsEmail, IsOptional, IsString } from 'class-validator';

export class updateStudentDto {
  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  surname: string;
}
