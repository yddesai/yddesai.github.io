
+++ 
title = "Improve Battery Life in Fedora" 
date = "2024-02-07" 
author = "Yugandhar Desai" 
description = "..."
+++


## Improving Battery Life in Fedora


### Are you tired of your laptop running out of juice too quickly on Fedora? Here are some tips to extend your battery life:

Tweak Power Settings: Adjust power settings to optimize battery usage. Use gnome-tweaks or dconf-editor to modify settings such as screen brightness, sleep time, and CPU scaling governor.

Install TLP: TLP is a power management tool specifically designed for laptops. Install it using the command:

```bash
sudo dnf install tlp tlp-rdw
```
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
By implementing these tweaks and optimizations, you can significantly improve the battery life of your computer.

