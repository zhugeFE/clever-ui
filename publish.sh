#!/usr/bin/env bash

print(){
  echo -e "\033[32m $1 \033[0m"
}
npm run build-lib

git add -A;
read -p "提交内容：" msg
git commit -m $msg

branch=$(git symbolic-ref --short HEAD)
git push origin $branch

print 'npm version <newversion> | major | minor | patch | premajor | preminor | prepatch | prerelease'
read -p "版本号：" version
npm version $version
git add -A
git commit -m 'version update'
git push origin $branch

print '警告：只有正式发布才可以选择latest'
read -p "发布版本标签（latest）：" tag
if [ $tag ];then
  npm publish --tag $tag
else
  npm publish
fi
cnpm sync clever-ui
