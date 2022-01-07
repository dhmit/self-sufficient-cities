"""
Tests for the [BOILERPLATE] web app.
"""
# pylint: disable-msg=C0116
# ignoring pylint's `missing-function-docstring` errors

from django.test import TestCase


class MainTests(TestCase):
    """
    Test cases for the brightness, dominant color recognition, and tempo finding private functions
    """

    def test_simple(self):
        self.assertEqual(2+2, 4)
