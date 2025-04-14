function exercicio4(bot: number, top: number, sum: number)
{
    if(top < bot)
    {
        console.log(sum);
        return;
    }

    exercicio4(bot + 1, top, bot += bot);
}

exercicio4(1, 5, 1);
