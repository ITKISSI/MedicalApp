<?php

namespace ContainerVrzpUJo;

use Symfony\Component\DependencyInjection\Argument\RewindableGenerator;
use Symfony\Component\DependencyInjection\Exception\RuntimeException;

/**
 * @internal This class has been auto-generated by the Symfony Dependency Injection Component.
 */
class get_ServiceLocator_U7ORhVgService extends App_KernelDevDebugContainer
{
    /**
     * Gets the private '.service_locator.u7ORhVg' shared service.
     *
     * @return \Symfony\Component\DependencyInjection\ServiceLocator
     */
    public static function do($container, $lazyLoad = true)
    {
        return $container->privates['.service_locator.u7ORhVg'] = new \Symfony\Component\DependencyInjection\Argument\ServiceLocator($container->getService, [
            'App\\Controller\\AppointmentController::index' => ['privates', '.service_locator.9kKwU2t', 'get_ServiceLocator_9kKwU2tService', true],
            'App\\Controller\\AppointmentController::showAppointment' => ['privates', '.service_locator.8S5LSvx', 'get_ServiceLocator_8S5LSvxService', true],
            'App\\Controller\\AppointmentController::update' => ['privates', '.service_locator.hcgmq5R', 'get_ServiceLocator_Hcgmq5RService', true],
            'App\\Kernel::loadRoutes' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'App\\Kernel::registerContainerConfiguration' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'kernel::loadRoutes' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'kernel::registerContainerConfiguration' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'App\\Controller\\AppointmentController:index' => ['privates', '.service_locator.9kKwU2t', 'get_ServiceLocator_9kKwU2tService', true],
            'App\\Controller\\AppointmentController:showAppointment' => ['privates', '.service_locator.8S5LSvx', 'get_ServiceLocator_8S5LSvxService', true],
            'App\\Controller\\AppointmentController:update' => ['privates', '.service_locator.hcgmq5R', 'get_ServiceLocator_Hcgmq5RService', true],
            'kernel:loadRoutes' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
            'kernel:registerContainerConfiguration' => ['privates', '.service_locator.y4_Zrx.', 'get_ServiceLocator_Y4Zrx_Service', true],
        ], [
            'App\\Controller\\AppointmentController::index' => '?',
            'App\\Controller\\AppointmentController::showAppointment' => '?',
            'App\\Controller\\AppointmentController::update' => '?',
            'App\\Kernel::loadRoutes' => '?',
            'App\\Kernel::registerContainerConfiguration' => '?',
            'kernel::loadRoutes' => '?',
            'kernel::registerContainerConfiguration' => '?',
            'App\\Controller\\AppointmentController:index' => '?',
            'App\\Controller\\AppointmentController:showAppointment' => '?',
            'App\\Controller\\AppointmentController:update' => '?',
            'kernel:loadRoutes' => '?',
            'kernel:registerContainerConfiguration' => '?',
        ]);
    }
}