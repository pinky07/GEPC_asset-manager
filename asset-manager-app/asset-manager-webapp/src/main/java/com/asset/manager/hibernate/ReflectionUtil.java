package com.asset.manager.hibernate;

import org.apache.commons.lang3.StringUtils;

import java.lang.reflect.Field;

public class ReflectionUtil
{
	@SuppressWarnings("unchecked")
	static <T> T getValue(String fieldName, Object object)
	{
		Class<? extends Object> clazz = object.getClass();
		T value = null;
		try
		{
			Field field = getField(clazz, fieldName);
			field.setAccessible(true);
			value = (T) field.get(object);
		}
		catch (SecurityException ex)
		{
			handleReflectionException(ex, clazz, fieldName);
		}
		catch (IllegalArgumentException ex)
		{
			handleReflectionException(ex, clazz, fieldName);
		}
		catch (IllegalAccessException ex)
		{
			handleReflectionException(ex, clazz, fieldName);
		}
		return value;
	}

	public static Field getField(Class<?> clazz, String name)
	{
		if (StringUtils.isNotBlank(name))
		{
			Class<?> currentClazz = clazz;
			while (!Object.class.equals(currentClazz) && currentClazz != null)
			{
				Field[] fields = currentClazz.getDeclaredFields();
				for (Field field : fields)
				{
					if (StringUtils.equals(name, field.getName())) { return field; }
				}
				currentClazz = currentClazz.getSuperclass();
			}
		}
		throw new IllegalStateException("The " + clazz.getSimpleName() + " class does not have any " + name + " field");
	}

	private static void handleReflectionException(Exception ex, Class<? extends Object> clazz, String fieldName)
	{
		throw new IllegalStateException("Unexpected reflection exception while getting " + fieldName
				+ " field of class " + clazz.getSimpleName() + ": " + ex.getMessage(), ex);

	}
}
