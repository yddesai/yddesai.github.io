
+++ 
title = "Hello World" 
date = "2024-02-07" 
author = "Yugandhar Desai" 
description = "..."
+++

# Hello World, This is my first blog post

## Improving Battery Life in Fedora


### Are you tired of your laptop running out of juice too quickly on Fedora? Here are some tips to extend your battery life:

Tweak Power Settings: Adjust power settings to optimize battery usage. Use gnome-tweaks or dconf-editor to modify settings such as screen brightness, sleep time, and CPU scaling governor.

Install TLP: TLP is a power management tool specifically designed for laptops. Install it using the command:

sudo dnf install tlp tlp-rdw

Enable and start the TLP service:

```bash

sudo systemctl enable tlp.service
sudo systemctl start tlp.service
```

Monitor Power Usage: Utilize tools like powertop to identify processes consuming excessive power and adjust them accordingly.

```bash

sudo powertop --auto-tune
```

Update Drivers: Ensure that your drivers are up to date, especially graphics and wireless drivers, as outdated drivers can cause increased power consumption.
```bash

sudo dnf upgrade

````
By implementing these tweaks and optimizations, you can significantly improve the battery life of your Fedora-powered laptop.

```c++
#include <bits/stdc++.h>
using namespace std;

int moores_voting(vector<int> arr){
    int ele, count;
    ele = arr[0];
    count = 0;
    for(int i=0; i < arr.size(); i++){
        if(count == 0){
            ele = arr[i];
            count = 1;
        }else if(ele == arr[i]){
            count++;
        }else{
            count--;
        }
    }
    int maj_count = 0;
    for(int i=0; i < arr.size(); i++){
        if(arr[i] == ele){
            maj_count++;
        }
        if(maj_count > arr.size()/2){
            return ele;
        }
    }
    return ele;
}

int main(){
    vector<int> arr = {2,2,1,1,1,2,2};
    int ele  = moores_voting(arr);
    cout << ele;
}
```