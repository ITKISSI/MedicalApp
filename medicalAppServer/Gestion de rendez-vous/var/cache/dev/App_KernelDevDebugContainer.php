<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\ContainerY8QeXuT\App_KernelDevDebugContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/ContainerY8QeXuT/App_KernelDevDebugContainer.php') {
    touch(__DIR__.'/ContainerY8QeXuT.legacy');

    return;
}

if (!\class_exists(App_KernelDevDebugContainer::class, false)) {
    \class_alias(\ContainerY8QeXuT\App_KernelDevDebugContainer::class, App_KernelDevDebugContainer::class, false);
}

return new \ContainerY8QeXuT\App_KernelDevDebugContainer([
    'container.build_hash' => 'Y8QeXuT',
    'container.build_id' => 'e43febf6',
    'container.build_time' => 1688769711,
], __DIR__.\DIRECTORY_SEPARATOR.'ContainerY8QeXuT');
