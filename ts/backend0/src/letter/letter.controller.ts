import { Controller, Get, HttpException, HttpStatus, Param, Query } from '@nestjs/common';

@Controller('letter')
export class LetterController {
    @Get('/:letter') 
    getLetter(@Param('letter') letter: string): string {
        console.log(letter)
        if (letter.length > 1) {
            throw new HttpException('String cannot be longer than one character', HttpStatus.BAD_REQUEST)
        }
        return letter;
    }
}
