import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @ApiProperty()
    public email: string;
    public id: number;

    @ApiProperty()
    public name: string;
}
