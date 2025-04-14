function exercicio5(bot: number, top: number, sum: number)
{
    if(sum == 0 && top < bot)
    {
        let _ = top;
        top = bot;
        bot = _;
    }

    if(top < bot)
    {
        console.log(sum);
        return;
    }

    exercicio5(bot + 1, top, bot += bot);
}

exercicio5(5, 1, 0);
