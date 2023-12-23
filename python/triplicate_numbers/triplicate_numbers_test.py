import pytest
from triplicate_numbers import is_triplicate_number

def test_is_triplicate_number():
    cases = [
        ("111233322", True),
        ("111222333", True),
        ("133312221", True),
        ("123", False),
        ("123456789", False),
    ]
    for case in cases:
        assert is_triplicate_number(case[0]) == case[1]
