import io

from setuptools import find_packages
from setuptools import setup

with io.open("README.rst", "rt", encoding="utf8") as f:
    readme = f.read()

setup(
    name="musicBlog",
    version="1.0.0",
    url="http://musicalmusings.me/",
    license="BSD",
    maintainer="Laya Gollapudi",
    maintainer_email="layagollapudi@gmail.com",
    description="Personal Music thoughts blog",
    long_description=readme,
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=["flask"],
    extras_require={"test": ["pytest", "coverage"]},
)
