def is_triplicate_number(s: str) -> bool:
    stack = []

    for ch in s:
        if stack and ch == stack[-1][0]:
            stack[-1][1] += 1 
            if stack[-1][1] == 3: stack.pop()
            continue

        stack.append([ch, 1])
    
    return not stack
