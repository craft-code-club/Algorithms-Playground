export function isTriplicateWithArray(num: number): boolean
{
    let array = num.toString().split('');

    let i = 0;
    while(true) {

        if(array[i] == array[i+1] && array[i] == array[i+2]) {
            array.splice(i, 3);

            if(array.length == 0)
            {
                return true;
            }

            i = 0;
            continue;
        }

        i++;
        if(i == array.length)
        {
            break;
        }
    }

    return false;
}

export function isTriplicateWithStack(num: number): boolean {
    const array = num.toString().split('');
    const stack: [string, number][] = [];

    for(let i = 0; i < array.length; i++) {
        const current = array[i];

        // Stack peek
        const top = stack[stack.length - 1];

        if(!top || top[0] != current) {
            stack.push([current, 1]);
            continue;
        }

        top[1]++;

        if(top[1] == 3) {
            stack.pop();
        }
    }

    return stack.length == 0;
}